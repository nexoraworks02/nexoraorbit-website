/**
 * Static premium composition — used when the scene control is set to
 * "fallback", and conceptually the baseline for no-JS / low-power devices.
 * Just atmospheric light and depth: calm, on-brand, zero moving parts beyond
 * the (motion-gated) glow drift.
 */
export function HeroLabFallback() {
  return (
    <div className="hl-scene" aria-hidden data-hl-scene="fallback-static">
      <div className="hl-parallax hl-bloom" />
      <div className="hl-parallax hl-fog" />
    </div>
  );
}
