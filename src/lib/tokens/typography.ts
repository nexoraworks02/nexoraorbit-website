/**
 * NEXORA ORBIT - Typography tokens.
 * Each scale: fontSize / lineHeight / fontWeight / letterSpacing.
 * Rendered as `.ds-*` classes in `src/styles/typography.css`.
 */
export type TypeStyle = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing?: string;
  textTransform?: "uppercase";
};

export const display = {
  "2xl": { fontSize: "96px", lineHeight: "96px", fontWeight: 700, letterSpacing: "0" },
  xl: { fontSize: "80px", lineHeight: "80px", fontWeight: 700, letterSpacing: "0" },
  lg: { fontSize: "64px", lineHeight: "67px", fontWeight: 700, letterSpacing: "0" },
  md: { fontSize: "56px", lineHeight: "60px", fontWeight: 650, letterSpacing: "0" },
  sm: { fontSize: "48px", lineHeight: "53px", fontWeight: 650, letterSpacing: "0" },
} as const satisfies Record<string, TypeStyle>;

export const heading = {
  h1: { fontSize: "56px", lineHeight: "60px", fontWeight: 700, letterSpacing: "0" },
  h2: { fontSize: "44px", lineHeight: "49px", fontWeight: 650, letterSpacing: "0" },
  h3: { fontSize: "32px", lineHeight: "38px", fontWeight: 650, letterSpacing: "0" },
  h4: { fontSize: "24px", lineHeight: "30px", fontWeight: 650, letterSpacing: "0" },
  h5: { fontSize: "20px", lineHeight: "27px", fontWeight: 650, letterSpacing: "0" },
  h6: { fontSize: "18px", lineHeight: "25px", fontWeight: 650, letterSpacing: "0" },
} as const satisfies Record<string, TypeStyle>;

export const body = {
  xl: { fontSize: "22px", lineHeight: "34px", fontWeight: 400 },
  lg: { fontSize: "18px", lineHeight: "30px", fontWeight: 400 },
  md: { fontSize: "16px", lineHeight: "26px", fontWeight: 400 },
  sm: { fontSize: "14px", lineHeight: "22px", fontWeight: 400 },
  xs: { fontSize: "12px", lineHeight: "17px", fontWeight: 500 },
} as const satisfies Record<string, TypeStyle>;

export const ui = {
  eyebrow: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 650,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },
  button: { fontSize: "14px", lineHeight: "20px", fontWeight: 650 },
  nav: { fontSize: "14px", lineHeight: "20px", fontWeight: 500 },
  meta: { fontSize: "12px", lineHeight: "16px", fontWeight: 500 },
  mono: { fontSize: "12px", lineHeight: "18px", fontWeight: 500 },
} as const satisfies Record<string, TypeStyle>;

export const fontFamily = {
  sans: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
} as const;

export const typography = { display, heading, body, ui, fontFamily } as const;
