import type { CSSProperties } from "react";

type Particle = {
  left: number;
  top: number;
  delay: number;
  dur: number;
  dx: number;
  dy: number;
  tone?: "cyan" | "violet";
};

/**
 * Sparse, deterministic particle field (fixed positions — no Math.random, so
 * SSR and client markup match exactly). Reads as calm "data intelligence",
 * not dust/snow/sparks. Count is trimmed by CSS on low/mobile/reduced tiers.
 */
const PARTICLES: Particle[] = [
  { left: 12, top: 22, delay: 320, dur: 15, dx: 10, dy: -12, tone: "cyan" },
  { left: 22, top: 68, delay: 460, dur: 17, dx: -8, dy: -10 },
  { left: 31, top: 40, delay: 380, dur: 14, dx: 12, dy: 8 },
  { left: 40, top: 78, delay: 540, dur: 18, dx: -6, dy: -14, tone: "violet" },
  { left: 48, top: 18, delay: 300, dur: 16, dx: 8, dy: 10 },
  { left: 55, top: 55, delay: 620, dur: 15, dx: -10, dy: -8, tone: "cyan" },
  { left: 63, top: 30, delay: 420, dur: 19, dx: 6, dy: 12 },
  { left: 70, top: 72, delay: 500, dur: 14, dx: -12, dy: -6 },
  { left: 78, top: 44, delay: 360, dur: 17, dx: 10, dy: -10, tone: "violet" },
  { left: 84, top: 20, delay: 600, dur: 16, dx: -8, dy: 8 },
  { left: 88, top: 62, delay: 440, dur: 18, dx: 6, dy: -12, tone: "cyan" },
  { left: 17, top: 50, delay: 560, dur: 15, dx: 12, dy: 6 },
  { left: 36, top: 60, delay: 340, dur: 16, dx: -6, dy: -10 },
  { left: 60, top: 82, delay: 660, dur: 19, dx: 8, dy: -8 },
  { left: 74, top: 12, delay: 400, dur: 14, dx: -10, dy: 12, tone: "violet" },
  { left: 46, top: 38, delay: 520, dur: 17, dx: 10, dy: 8 },
  { left: 27, top: 84, delay: 580, dur: 18, dx: -8, dy: -10, tone: "cyan" },
  { left: 92, top: 36, delay: 360, dur: 15, dx: 6, dy: 10 },
];

export function HeroLabParticles() {
  return (
    <div className="hl-parallax hl-particles">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`hl-particle${p.tone ? ` hl-particle--${p.tone}` : ""}`}
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              "--hl-p-delay": `${p.delay}ms`,
              "--hl-p-dur": `${p.dur}s`,
              "--hl-dx": `${p.dx}px`,
              "--hl-dy": `${p.dy}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
