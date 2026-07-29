"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { inViewMotion } from "./motion-tokens";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type UseInViewMotionOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

export function useInViewMotion<TElement extends Element>(
  ref: RefObject<TElement | null>,
  options: UseInViewMotionOptions = {},
) {
  const prefersReducedMotion = useReducedMotionSafe();
  const [isInView, setIsInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsInView(true);

          if (options.once ?? inViewMotion.once) {
            observer.unobserve(entry.target);
          }
        } else if (!(options.once ?? inViewMotion.once)) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options.rootMargin ?? inViewMotion.rootMargin,
        threshold: options.threshold ?? inViewMotion.threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.once, options.rootMargin, options.threshold, prefersReducedMotion, ref]);

  return isInView;
}
