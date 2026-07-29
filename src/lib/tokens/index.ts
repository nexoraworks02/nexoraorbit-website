/**
 * NEXORA ORBIT - Design token barrel.
 * Import tokens for docs generation or JS-driven styling:
 *   import { colors, spacing, typography } from "@/lib/tokens";
 */
export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./radius";
export * from "./shadows";
export * from "./motion";
export * from "./breakpoints";

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius, blur } from "./radius";
import { shadows } from "./shadows";
import { duration, easing } from "./motion";
import { breakpoints, gridColumns } from "./breakpoints";

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  blur,
  shadows,
  duration,
  easing,
  breakpoints,
  gridColumns,
} as const;
