"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/lib/motion/useReducedMotionSafe";
import { detectHeroTier, type HeroTierConfig } from "@/lib/hero-lab/webgl-tier";
import { useScrollProgress } from "@/lib/hero-scroll/useScrollProgress";
import { HeroScrollContent } from "./HeroScrollContent";
import { HeroScrollScene } from "./HeroScrollScene";
import "@/styles/hero-scroll.css";

const DEFAULT_TIER: HeroTierConfig = {
  tier: "static",
  webglSupported: false,
  particleCount: 2500,
  dprCap: 2,
  postfx: false,
};

export type HeroScrollExperienceProps = {
  /** "lab" (default) shows the standalone /hero-lab-scroll prototype chrome
   * (lab header, "not production yet" notice). "site" renders it bare, for
   * use as the actual homepage hero under the real SiteHeader. */
  variant?: "lab" | "site";
};

/**
 * Scroll-driven hero orchestrator, shared by the /hero-lab-scroll prototype
 * and the production homepage. Two independent tracks:
 *
 *  - Content (HeroScrollContent): real SSR HTML, visible by default with zero
 *    JS. A `data-reveal="ready"` flip (added on mount, skipped entirely under
 *    reduced-motion) is the ONLY thing that can hide it first — matching the
 *    same "motion-runtime-ready" idiom used site-wide — so there is never a
 *    window where content depends on JS/scroll to become visible.
 *  - Scene (HeroScrollScene): decorative, aria-hidden, WebGL, purely
 *    scroll-scrubbed (bidirectional) via useScrollProgress. Only mounted when
 *    WebGL is supported and the visitor hasn't requested reduced motion.
 */
export function HeroScrollExperience({ variant = "lab" }: HeroScrollExperienceProps) {
  const reducedMotion = useReducedMotionSafe();
  const [tier, setTier] = useState<HeroTierConfig>(DEFAULT_TIER);
  const [readyForReveal, setReadyForReveal] = useState(false);
  const [revealedIn, setRevealedIn] = useState(false);
  const [inView, setInView] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const cinematic = tier.tier === "cinematic" && !reducedMotion;

  const { progressRef, skipToEnd } = useScrollProgress(containerRef, cinematic && inView);

  useEffect(() => {
    const config = detectHeroTier();
    /* eslint-disable react-hooks/set-state-in-effect */
    setTier(config);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    // Flips content into its enhanced (reveal-gated) state only once we know
    // we're on the client and motion is allowed — must run post-mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    setReadyForReveal(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    const timer = window.setTimeout(() => setRevealedIn(true), 60);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    const el = containerRef.current;

    if (!el || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setInView(Boolean(entry?.isIntersecting)), {
      threshold: 0,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSkip() {
    skipToEnd();
    const el = containerRef.current;

    if (el) {
      const bottom = el.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: bottom - window.innerHeight, behavior: reducedMotion ? "auto" : "smooth" });
    }
  }

  return (
    // A <section> (not a <div>) with no aria-label of its own — this is what
    // makes MotionRuntime's `main > section` query treat it as the page's
    // first/hero section (always exempt from the hide-until-scroll reveal
    // system, same as the old .nx-hero section it replaced) instead of
    // silently shifting that "index 0" exemption onto whatever section comes
    // after it. No aria-label means it doesn't register as its own ARIA
    // landmark — the nested <section aria-label="Homepage hero"> below does.
    <section
      className="hs-root nx-hero"
      data-theme="dark"
      data-reveal={readyForReveal ? "ready" : undefined}
      data-reveal-state={revealedIn ? "in" : undefined}
    >
      {variant === "lab" ? (
        <>
          <header className="hs-labheader">
            <span className="hs-labheader__brand">
              NEXORA <span>ORBIT</span>
            </span>
            <span className="hs-labheader__title">Hero Scroll Lab</span>
            <span className="hs-labheader__phase">Prototype</span>
          </header>
          <p className="hs-notice">Experimental scroll-driven hero prototype. Not the production homepage yet.</p>
        </>
      ) : null}

      <section ref={containerRef} className={cinematic ? "hs-scroll-wrap" : "hs-static-wrap"} aria-label="Homepage hero">
        <div className={cinematic ? "hs-sticky" : "hs-static-inner"}>
          {cinematic ? (
            <HeroScrollScene
              progressRef={progressRef}
              active={inView}
              particleCount={tier.particleCount}
              dprCap={tier.dprCap}
            />
          ) : (
            <div className="hs-fallback-backdrop" aria-hidden />
          )}

          <div className="hs-vignette" aria-hidden />
          {cinematic ? <div className="hs-grid-overlay" aria-hidden /> : null}
          {cinematic ? (
            <>
              <div className="hs-ring hs-ring--sm" aria-hidden />
              <div className="hs-ring hs-ring--lg" aria-hidden />
            </>
          ) : null}

          <div className="hs-content-wrap">
            <HeroScrollContent />
          </div>

          {cinematic ? (
            <button type="button" className="hs-skip ds-focus-ring" onClick={handleSkip}>
              Skip
            </button>
          ) : null}

          {cinematic ? (
            <div className="hs-scrollhint" aria-hidden>
              <span className="hs-scrollhint__line" />
              <span>Scroll to explore</span>
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
}
