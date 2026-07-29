/**
 * NEXORA ORBIT — Elevation tokens. Mirrors CSS vars `--shadow-*`.
 * Tuned for a dark-first signature environment.
 */
export const shadows = {
  1: "0 1px 2px rgba(15,23,42,0.08)",
  2: "0 8px 24px rgba(15,23,42,0.10)",
  3: "0 18px 48px rgba(15,23,42,0.16)",
  4: "0 32px 80px rgba(2,6,23,0.28)",
  darkPanel: "0 24px 80px rgba(0,0,0,0.42), 0 0 48px rgba(37,99,255,0.08)",
} as const;

export type ShadowKey = keyof typeof shadows;
