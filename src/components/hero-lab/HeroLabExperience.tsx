"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/lib/motion/useReducedMotionSafe";
import { detectHeroTier, type HeroTierConfig } from "@/lib/hero-lab/webgl-tier";
import { HeroLabContent } from "./HeroLabContent";
import { HeroLabScene } from "./HeroLabScene";
import { HeroLabFallback } from "./HeroLabFallback";
import { HeroLab3DScene } from "./HeroLab3DScene";
import { HeroLabScrollBridge } from "./HeroLabScrollBridge";
import { HeroLabStoryboardRail } from "./HeroLabStoryboardRail";
import { HeroLabControls, type ParticleLevel, type SceneMode } from "./HeroLabControls";

const DEFAULT_TIER: HeroTierConfig = {
  tier: "static",
  webglSupported: false,
  particleCount: 1600,
  dprCap: 2,
  postfx: true,
};

const STORY_ACT_COUNT = 6;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

/**
 * /hero-lab orchestrator (client). Progressive enhancement: renders the static
 * hero content immediately, then — after mount — upgrades the decorative scene
 * to WebGL when the device supports it. Reduced-motion forces the static scene.
 */
export function HeroLabExperience() {
  const osReducedMotion = useReducedMotionSafe();

  const [motionOn, setMotionOn] = useState(true);
  const [particles, setParticles] = useState<ParticleLevel>("medium");
  const [sceneMode, setSceneMode] = useState<SceneMode>("css");
  const [reducedSim, setReducedSim] = useState(false);
  const [tier, setTier] = useState<HeroTierConfig>(DEFAULT_TIER);
  const [inView, setInView] = useState(true);

  const effectiveReduced = osReducedMotion || reducedSim;
  const motionActive = motionOn && !effectiveReduced;

  // What actually renders: reduced-motion always collapses to the static scene.
  const renderMode: SceneMode = effectiveReduced ? "static" : sceneMode;

  const rootRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Capability probe (client-only) — upgrade to WebGL when supported. This must
  // run after mount because it reads DOM/navigator; upgrading the scene here is
  // intentional progressive enhancement, hence the scoped rule exception.
  useEffect(() => {
    const config = detectHeroTier();
    /* eslint-disable react-hooks/set-state-in-effect */
    setTier(config);
    if (config.tier === "cinematic") {
      setSceneMode("3d");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Scroll storyboard: normal page scroll drives a sticky hero sequence. Mouse
  // wheel input is also mapped directly while the sticky hero is active so the
  // prototype feels responsive during review. Reduced-motion collapses the
  // sequence to its resolved state.
  useEffect(() => {
    const root = rootRef.current;
    const story = storyRef.current;

    if (!root || !story) {
      return;
    }

    let raf = 0;
    let wheelRaf = 0;

    const writeProgress = (progress: number) => {
      if (effectiveReduced) {
        root.dataset.hlStory = "ready";
        root.dataset.hlAct = "3";
        root.style.setProperty("--hl-scroll", "0");
        root.style.setProperty("--hl-meter", "0%");
        root.style.setProperty("--hl-forward", "0px");
        root.style.setProperty("--hl-depth-scale", "1");
        root.style.setProperty("--hl-atmosphere", "1");
        root.style.setProperty("--hl-ecosystem", "0");
        return;
      }

      const safeProgress = clamp(progress);
      const act = Math.min(STORY_ACT_COUNT - 1, Math.floor(safeProgress * STORY_ACT_COUNT));
      const ecosystem = clamp((safeProgress - 0.72) / 0.28);

      root.dataset.hlAct = String(act);
      root.dataset.hlStory = "ready";
      root.style.setProperty("--hl-scroll", safeProgress.toFixed(4));
      root.style.setProperty("--hl-meter", `${(safeProgress * 100).toFixed(2)}%`);
      root.style.setProperty("--hl-forward", `${(-safeProgress * 72).toFixed(2)}px`);
      root.style.setProperty("--hl-depth-scale", (1 + safeProgress * 0.09).toFixed(4));
      root.style.setProperty("--hl-atmosphere", (0.7 + safeProgress * 0.3).toFixed(4));
      root.style.setProperty("--hl-ecosystem", ecosystem.toFixed(4));
    };

    const getStoryTotal = () => Math.max(1, story.offsetHeight - window.innerHeight);

    const getScrollProgress = () => {
      const rect = story.getBoundingClientRect();
      return clamp(-rect.top / getStoryTotal());
    };

    const applyProgress = () => {
      raf = 0;
      writeProgress(getScrollProgress());
    };

    const scheduleProgress = () => {
      if (raf) {
        return;
      }
      raf = window.requestAnimationFrame(applyProgress);
    };

    const shouldUseWheelStory = () => {
      if (effectiveReduced || !window.matchMedia("(min-width: 768px)").matches) {
        return false;
      }

      const rect = story.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const onWheel = (event: WheelEvent) => {
      if (!shouldUseWheelStory()) {
        return;
      }

      const total = getStoryTotal();
      const current = getScrollProgress();
      const next = clamp(current + event.deltaY / (total * 0.82));
      const canAdvance = event.deltaY > 0 && next < 1;
      const canReverse = event.deltaY < 0 && next > 0;

      if (!canAdvance && !canReverse) {
        return;
      }

      event.preventDefault();

      if (wheelRaf) {
        window.cancelAnimationFrame(wheelRaf);
      }

      wheelRaf = window.requestAnimationFrame(() => {
        wheelRaf = 0;
        const storyTop = story.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: storyTop + next * total, behavior: "auto" });
        writeProgress(next);
      });
    };

    applyProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);
    story.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      story.removeEventListener("wheel", onWheel);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      if (wheelRaf) {
        window.cancelAnimationFrame(wheelRaf);
      }
    };
  }, [effectiveReduced]);

  // Desktop pointer parallax for the CSS scene only (the 3D camera has its own).
  useEffect(() => {
    const hero = heroRef.current;
    const scene = sceneRef.current;

    if (!hero || !scene || !motionActive || sceneMode !== "css") {
      return;
    }
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      scene.style.setProperty("--hl-px", currentX.toFixed(4));
      scene.style.setProperty("--hl-py", currentY.toFixed(4));

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        raf = window.requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
      if (!raf) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    hero.addEventListener("pointermove", onMove);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      scene.style.setProperty("--hl-px", "0");
      scene.style.setProperty("--hl-py", "0");
    };
  }, [motionActive, sceneMode]);

  // Pause ambient loops / the render loop when the hero scrolls out of view.
  useEffect(() => {
    const root = rootRef.current;
    const hero = heroRef.current;

    if (!root || !hero || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        root.dataset.hlInview = visible ? "true" : "false";
        setInView(visible);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function renderScene() {
    if (renderMode === "3d") {
      return (
        <HeroLab3DScene
          active={motionActive && inView}
          boot
          postfx={tier.postfx}
          particleCount={particles === "low" ? Math.round(tier.particleCount * 0.5) : tier.particleCount}
          dprCap={tier.dprCap}
        />
      );
    }
    if (renderMode === "css") {
      return <HeroLabScene sceneRef={sceneRef} />;
    }
    return <HeroLabFallback />;
  }

  return (
    <div
      ref={rootRef}
      className="hl-root"
      data-theme="dark"
      data-hl-motion={motionActive ? "on" : "off"}
      data-hl-reduced={effectiveReduced ? "true" : "false"}
      data-hl-particles={particles}
      data-hl-scene={renderMode}
      data-hl-inview="true"
      data-hl-act="0"
      data-hl-story="idle"
    >
      <header className="hl-labheader">
        <span className="hl-labheader__brand">
          NEXORA <span>ORBIT</span>
        </span>
        <span className="hl-labheader__title">Hero Lab</span>
        <span className="hl-labheader__phase">Phase 19D / 3D Prototype</span>
      </header>
      <p className="hl-notice">Experimental cinematic hero prototype. Not the production homepage yet.</p>

      <main>
        <div className="hl-story" ref={storyRef}>
          <section className="hl-hero" ref={heroRef} aria-label="Hero prototype">
            {renderScene()}
            <div className="hl-hero__inner">
              <HeroLabContent />
            </div>
            <HeroLabStoryboardRail />
            <p className="hl-scroll-cue" aria-hidden>
              Scroll to enter the system
            </p>
          </section>
        </div>

        <HeroLabScrollBridge />
      </main>

      <HeroLabControls
        motionOn={motionOn}
        onMotionChange={setMotionOn}
        particles={particles}
        onParticlesChange={setParticles}
        sceneMode={sceneMode}
        onSceneModeChange={setSceneMode}
        reducedSim={reducedSim}
        onReducedSimChange={setReducedSim}
        osReducedMotion={osReducedMotion}
        webglSupported={tier.webglSupported}
      />
    </div>
  );
}
