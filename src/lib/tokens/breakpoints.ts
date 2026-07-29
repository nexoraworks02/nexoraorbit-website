/**
 * NEXORA ORBIT — Responsive breakpoints (px).
 * Grid intent: mobile 4-col, tablet 8-col, desktop 12-col.
 */
export const breakpoints = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const gridColumns = {
  mobile: 4,
  tablet: 8,
  desktop: 12,
} as const;

export type BreakpointKey = keyof typeof breakpoints;
