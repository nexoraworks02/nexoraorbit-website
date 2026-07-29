"use client";

import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";

/** Structural ref type — accepts both MutableRefObject and RefObject shapes. */
export type ProgressRef = { current: number };

/**
 * Drives a 0..1 scroll-scrub value from how far a tall container has been
 * scrolled through, while its inner viewport stays pinned (`position: sticky`).
 * The value lives in a ref (not React state) so the 3D scene can read it every
 * frame inside `useFrame` without forcing a React re-render per scroll event.
 *
 * Bidirectional (scrolling back up rewinds the show) and damped (a light
 * follow-lag gives the motion inertia instead of snapping to the raw scroll
 * position) — matches the reference choreography without reintroducing
 * scroll-jacking: native scrolling is never intercepted or locked.
 */
export function useScrollProgress(containerRef: RefObject<HTMLElement | null>, active: boolean) {
  const progressRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    let rafId = 0;

    function computeTarget() {
      const rect = container!.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      if (scrollable <= 0) {
        targetRef.current = 1;
        return;
      }

      targetRef.current = Math.max(0, Math.min(1, -rect.top / scrollable));
    }

    function tick() {
      progressRef.current += (targetRef.current - progressRef.current) * 0.06;
      rafId = window.requestAnimationFrame(tick);
    }

    computeTarget();
    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
      window.cancelAnimationFrame(rafId);
    };
  }, [containerRef, active]);

  return useMemo(
    () => ({
      progressRef,
      skipToEnd: () => {
        targetRef.current = 1;
      },
    }),
    [],
  );
}
