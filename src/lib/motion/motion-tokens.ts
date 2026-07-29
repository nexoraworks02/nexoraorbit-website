export const motionDurations = {
  instant: "var(--duration-instant)",
  fast: "var(--duration-fast)",
  base: "var(--duration-base)",
  slow: "var(--duration-slow)",
  cinematic: "var(--duration-cinematic)",
} as const;

export const motionEasing = {
  standard: "var(--ease-standard)",
  enter: "var(--ease-enter)",
  exit: "var(--ease-exit)",
  precise: "var(--ease-precise)",
} as const;

export const motionPresets = {
  fadeLift: {
    duration: motionDurations.slow,
    easing: motionEasing.enter,
    distance: "24px",
  },
  softFade: {
    duration: motionDurations.slow,
    easing: motionEasing.standard,
    distance: "0px",
  },
  cardReveal: {
    duration: motionDurations.slow,
    easing: motionEasing.enter,
    distance: "20px",
    stagger: "70ms",
  },
  heroLineReveal: {
    duration: motionDurations.cinematic,
    easing: motionEasing.enter,
    distance: "18px",
  },
  panelResolve: {
    duration: motionDurations.cinematic,
    easing: motionEasing.enter,
    distance: "18px",
  },
  signalTrace: {
    duration: "1400ms",
    easing: motionEasing.standard,
  },
} as const;

export const inViewMotion = {
  rootMargin: "0px 0px -8% 0px",
  threshold: 0.1,
  once: true,
} as const;

export type MotionPresetName = keyof typeof motionPresets;
