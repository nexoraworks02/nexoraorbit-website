/**
 * NEXORA ORBIT — Border radius tokens. Mirrors CSS vars `--radius-*`.
 */
export const radius = {
  none: "0px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "999px",
} as const;

export const blur = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
} as const;

export type RadiusKey = keyof typeof radius;
export type BlurKey = keyof typeof blur;
