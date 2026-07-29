/**
 * NEXORA ORBIT - Color tokens (single source of truth for JS/TS + docs).
 * These mirror the CSS custom properties declared in `src/styles/tokens.css`.
 * Consume semantic tokens in UI; primitives exist to compose semantics.
 */

export const brand = {
  navy: {
    950: "#050816",
    900: "#080D1F",
  },
  blue: {
    600: "#2563FF",
    500: "#3B82FF",
    400: "#60A5FA",
  },
  purple: {
    600: "#7C3AED",
    500: "#8B5CF6",
  },
} as const;

export const neutral = {
  ink: {
    950: "#030712",
    900: "#0B1020",
  },
  slate: {
    800: "#1E293B",
    600: "#475569",
    400: "#94A3B8",
    200: "#E2E8F0",
    50: "#F8FAFC",
  },
  white: "#FFFFFF",
} as const;

export const accent = {
  cyan: "#22D3EE",
  indigo: "#6366F1",
  violet: "#A855F7",
  teal: "#14B8A6",
  silver: "#CBD5E1",
} as const;

/** Status hues used by Badge / Chip / form validation. */
export const status = {
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#22D3EE",
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #2563FF 0%, #7C3AED 52%, #A855F7 100%)",
  backgroundDeep:
    "radial-gradient(circle at 20% 0%, rgba(37,99,255,0.22), transparent 34%), radial-gradient(circle at 80% 12%, rgba(124,58,237,0.18), transparent 30%), #050816",
  glassReflection:
    "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))",
} as const;

/** Semantic surface/text/border roles, resolved per theme via CSS variables. */
export const semantic = {
  dark: {
    surface: {
      base: "#050816",
      raised: "#080D1F",
      panel: "rgba(255,255,255,0.045)",
      glass: "rgba(255,255,255,0.075)",
      overlay: "rgba(3,7,18,0.72)",
    },
    text: {
      primary: "rgba(255,255,255,0.96)",
      secondary: "#CBD5E1",
      muted: "#94A3B8",
      inverse: "#030712",
    },
    border: {
      subtle: "rgba(255,255,255,0.08)",
      default: "rgba(255,255,255,0.12)",
      strong: "rgba(255,255,255,0.20)",
      brand: "rgba(96,165,250,0.36)",
    },
  },
  light: {
    surface: {
      base: "#FFFFFF",
      raised: "#F8FAFC",
      panel: "#F1F5F9",
      glass: "rgba(255,255,255,0.72)",
      overlay: "rgba(255,255,255,0.82)",
    },
    text: {
      primary: "#030712",
      secondary: "#475569",
      muted: "#64748B",
      inverse: "#FFFFFF",
    },
    border: {
      subtle: "rgba(15,23,42,0.08)",
      default: "rgba(15,23,42,0.12)",
      strong: "rgba(15,23,42,0.18)",
      brand: "rgba(37,99,255,0.24)",
    },
  },
} as const;

export const colors = { brand, neutral, accent, status, gradients, semantic } as const;
