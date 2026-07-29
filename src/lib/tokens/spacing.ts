/**
 * NEXORA ORBIT — Spacing scale (px). 4px base grid.
 * Indices map to CSS vars `--space-0 … --space-14`.
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 32,
  8: 40,
  9: 48,
  10: 64,
  11: 80,
  12: 96,
  13: 128,
  14: 160,
} as const;

export type SpacingKey = keyof typeof spacing;
