"use client";

import dynamic from "next/dynamic";
import type { HeroLabCanvasProps } from "./canvas/HeroLabCanvas";

/**
 * Client-only (ssr: false) wrapper for the WebGL hero. The heavy Three.js /
 * R3F chunk loads lazily here, after first paint; until it loads (and on any
 * failure) nothing renders and the page's static hero content stays visible.
 * Decorative — the whole scene is aria-hidden.
 */
const HeroLabCanvas = dynamic(
  () => import("./canvas/HeroLabCanvas").then((mod) => mod.HeroLabCanvas),
  { ssr: false, loading: () => null },
);

export function HeroLab3DScene(props: HeroLabCanvasProps) {
  return (
    <div className="hl-scene hl-scene--3d" aria-hidden>
      <HeroLabCanvas {...props} />
    </div>
  );
}
