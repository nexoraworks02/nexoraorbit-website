import type { RefObject } from "react";
import { HeroLabParticles } from "./HeroLabParticles";
import { HeroLabSystemVisual } from "./HeroLabSystemVisual";

/**
 * The full cinematic scene: atmospheric blooms, depth fog, signal lines,
 * particle field, and the floating glass system. Entirely decorative and
 * `aria-hidden`. Pointer parallax writes `--hl-px/--hl-py` onto this root.
 */
export function HeroLabScene({ sceneRef }: { sceneRef?: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="hl-scene" ref={sceneRef} aria-hidden>
      <div className="hl-parallax hl-bloom" />
      <div className="hl-parallax hl-fog" />

      <div className="hl-parallax hl-lines">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation">
          <path className="hl-line" pathLength={1} d="M18,24 L46,16" />
          <path className="hl-line" pathLength={1} d="M46,16 L72,30" />
          <path className="hl-line hl-line--soft" pathLength={1} d="M72,30 L84,52" />
          <path className="hl-line hl-line--soft" pathLength={1} d="M34,62 L66,70" />
          <path className="hl-line hl-line--soft" pathLength={1} d="M18,24 L34,62" />
        </svg>
      </div>

      <HeroLabParticles />
      <HeroLabSystemVisual />
    </div>
  );
}
