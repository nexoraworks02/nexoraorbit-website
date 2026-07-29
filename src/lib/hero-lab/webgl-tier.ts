/**
 * Capability probe for the /hero-lab WebGL hero. Client-only.
 * Decides whether the cinematic 3D scene is safe to mount, and at what budget.
 */
export type HeroTier = "cinematic" | "static";

export type HeroTierConfig = {
  tier: HeroTier;
  webglSupported: boolean;
  particleCount: number;
  dprCap: number;
  postfx: boolean;
};

export function detectWebgl(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

export function detectHeroTier(): HeroTierConfig {
  const webglSupported = detectWebgl();

  if (typeof window === "undefined" || !webglSupported) {
    return { tier: "static", webglSupported, particleCount: 0, dprCap: 1, postfx: false };
  }

  const nav = navigator as NavigatorWithHints;
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2;
  const lowCores = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2;
  const saveData = Boolean(nav.connection?.saveData);
  const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

  if (saveData || lowMemory || lowCores) {
    return { tier: "static", webglSupported, particleCount: 0, dprCap: 1, postfx: false };
  }

  return {
    tier: "cinematic",
    webglSupported,
    particleCount: isMobile ? 800 : 2500,
    dprCap: isMobile ? 1.5 : 2,
    postfx: !isMobile,
  };
}
