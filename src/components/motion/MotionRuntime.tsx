"use client";

import { useEffect } from "react";

/**
 * NEXORA ORBIT motion runtime.
 *
 * Tags public-page sections/cards for the reveal system and drives the
 * IntersectionObserver that plays each reveal once.
 *
 * Runs inside useEffect — i.e. strictly AFTER React hydration — because the
 * previous inline-script version mutated the DOM during HTML parse and caused
 * hydration mismatches. Content is fully visible without this runtime; hidden
 * states only apply under the `motion-runtime-ready` class it adds.
 */

const EXCLUDED_ROUTES = /^\/(design-system|wireframes|ui|hero-lab|hero-lab-scroll)(\/|$)/;
const MOTION_TARGETS_SELECTOR = '[data-motion="section"], [data-motion-card]';

export function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intersectionObserver: IntersectionObserver | undefined;
    let mutationObserver: MutationObserver | undefined;
    let scheduledFrame = 0;
    let fallbackTimer = 0;

    function prepareSections() {
      if (EXCLUDED_ROUTES.test(window.location.pathname)) {
        return false;
      }

      const sections = Array.from(document.querySelectorAll("main > section, main article"));

      sections.forEach((section, sectionIndex) => {
        if (!(section instanceof HTMLElement) || section.classList.contains("nx-hero") || sectionIndex === 0) {
          return;
        }

        if (!section.dataset.motion) {
          section.dataset.motion = "section";
        }

        const firstHeading = section.querySelector("h1, h2");

        if (firstHeading instanceof HTMLElement) {
          if (!firstHeading.dataset.motionChild) {
            firstHeading.dataset.motionChild = "heading";
          }

          // Hierarchy reveal: tag the eyebrow/body that SectionHeader renders as
          // direct siblings of the heading, using its stable typography classes.
          // Sections that hand-roll their own copy outside SectionHeader simply
          // have no match here — the section-level fade still covers them.
          const headerWrapper = firstHeading.parentElement;
          const eyebrow = headerWrapper?.querySelector<HTMLElement>(":scope > .ds-eyebrow");

          if (eyebrow instanceof HTMLElement && !eyebrow.dataset.motionChild) {
            eyebrow.dataset.motionChild = "eyebrow";
          }

          const body = headerWrapper?.querySelector<HTMLElement>(
            ":scope > .ds-body-lg, :scope > .ds-body-md, :scope > .ds-body-sm",
          );

          if (body instanceof HTMLElement && !body.dataset.motionChild) {
            body.dataset.motionChild = "body";
          }
        }

        Array.from(section.querySelectorAll("[data-motion-card]")).forEach((card, cardIndex) => {
          if (card instanceof HTMLElement && !card.style.getPropertyValue("--motion-index")) {
            card.style.setProperty("--motion-index", String(Math.min(cardIndex, 8)));
          }
        });
      });

      return true;
    }

    function showAll(targets: Element[]) {
      targets.forEach((target) => {
        if (target instanceof HTMLElement) {
          target.dataset.motionState = "in";
        }
      });
    }

    /**
     * Elements already on screen are marked "in" synchronously, in the same
     * tick that `motion-runtime-ready` starts hiding pending targets. This
     * prevents above-the-fold content from blinking (visible → hidden →
     * animate) now that the runtime starts after first paint.
     */
    function isOnScreen(target: Element) {
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function observeTargets() {
      if (!prepareSections()) {
        return;
      }

      root.classList.add("motion-runtime-ready");
      root.classList.toggle("motion-reduced", reducedMotionQuery.matches);
      root.dataset.motionRuntime = "mounted";

      const targets = Array.from(document.querySelectorAll(MOTION_TARGETS_SELECTOR));

      if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
        showAll(targets);
        return;
      }

      intersectionObserver?.disconnect();

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
              return;
            }

            entry.target.dataset.motionState = "in";
            intersectionObserver?.unobserve(entry.target);
          });
        },
        {
          // Trigger as a section first peeks into view (rather than waiting
          // until it is well inside the viewport) so its reveal begins while
          // the previous section is still settling — a continuous, overlapping
          // handoff instead of a hard cut between sections.
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.1,
        },
      );

      targets.forEach((target) => {
        if (!(target instanceof HTMLElement) || target.dataset.motionState === "in") {
          return;
        }

        if (isOnScreen(target)) {
          target.dataset.motionState = "in";
          return;
        }

        intersectionObserver?.observe(target);
      });
    }

    function runScheduled() {
      if (scheduledFrame) {
        window.cancelAnimationFrame(scheduledFrame);
        scheduledFrame = 0;
      }
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
        fallbackTimer = 0;
      }
      observeTargets();
    }

    function scheduleObserve() {
      if (scheduledFrame) {
        window.cancelAnimationFrame(scheduledFrame);
      }
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }

      // rAF keeps tagging aligned with the next paint, but rAF never fires in
      // hidden/background tabs — the timeout fallback guarantees completion.
      scheduledFrame = window.requestAnimationFrame(runScheduled);
      fallbackTimer = window.setTimeout(runScheduled, 160);
    }

    // First run is synchronous: useEffect already fires after paint, and the
    // synchronous pass lets on-screen targets be marked "in" in the same style
    // recalculation that begins hiding pending ones (no blink, no rAF race —
    // rAF does not fire in hidden/background tabs).
    observeTargets();

    reducedMotionQuery.addEventListener("change", scheduleObserve);

    if ("MutationObserver" in window && document.body) {
      mutationObserver = new MutationObserver((mutations) => {
        // Ignore mutations this runtime causes itself (attribute/style tagging)
        // — only react to structural changes such as route content swaps.
        if (mutations.some((mutation) => mutation.type === "childList" && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0))) {
          scheduleObserve();
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      reducedMotionQuery.removeEventListener("change", scheduleObserve);
      mutationObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (scheduledFrame) {
        window.cancelAnimationFrame(scheduledFrame);
      }
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  return null;
}
