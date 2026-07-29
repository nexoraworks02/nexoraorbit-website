"use client";

import dynamic from "next/dynamic";
import type { HeroScrollCanvasProps } from "./canvas/HeroScrollCanvas";

/**
 * Client-only (ssr: false) wrapper for the WebGL scroll scene. The heavy
 * Three.js/R3F chunk loads lazily, after first paint; until it loads — and on
 * any failure — nothing renders here and the semantic content stays visible.
 * Purely decorative — the whole layer is aria-hidden.
 */
const HeroScrollCanvas = dynamic(
  () => import("./canvas/HeroScrollCanvas").then((mod) => mod.HeroScrollCanvas),
  { ssr: false, loading: () => null },
);

export function HeroScrollScene(props: HeroScrollCanvasProps) {
  return (
    <div className="hs-canvas-layer" aria-hidden>
      <HeroScrollCanvas {...props} />
    </div>
  );
}
