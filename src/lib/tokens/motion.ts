/**
 * NEXORA ORBIT — Motion tokens. Calm, precise, cinematic.
 * Motion must improve trust, clarity, premium perception, or conversion
 * confidence — never decoration without purpose.
 */
export const duration = {
  instant: "80ms",
  fast: "140ms",
  base: "220ms",
  slow: "360ms",
  cinematic: "700ms",
} as const;

export const easing = {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  enter: "cubic-bezier(0.16, 1, 0.3, 1)",
  exit: "cubic-bezier(0.7, 0, 0.84, 0)",
  precise: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export type DurationKey = keyof typeof duration;
export type EasingKey = keyof typeof easing;
