"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import type { ProgressRef } from "@/lib/hero-scroll/useScrollProgress";
import { ScrollLights } from "./ScrollLights";
import { ParticleConvergence } from "./ParticleConvergence";
import { LogoReveal } from "./LogoReveal";
import { ScrollCameraRig } from "./ScrollCameraRig";

export type HeroScrollCanvasProps = {
  progressRef: ProgressRef;
  /** Run the render loop; false pauses it (offscreen / hero not in view). */
  active?: boolean;
  particleCount?: number;
  dprCap?: number;
};

/**
 * The scroll-driven WebGL scene. Mounted client-only via HeroScrollScene's
 * dynamic import so it never runs during SSR. Transparent background lets the
 * page's dark surface + CSS chrome layers show through.
 */
export function HeroScrollCanvas({ progressRef, active = true, particleCount = 2500, dprCap = 2 }: HeroScrollCanvasProps) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, dprCap]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      camera={{ fov: 45, near: 0.1, far: 100, position: [1.4, 0.3, 9] }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <ScrollLights progressRef={progressRef} />
      <Suspense fallback={null}>
        <LogoReveal progressRef={progressRef} />
      </Suspense>
      <ParticleConvergence progressRef={progressRef} count={particleCount} />
      <ScrollCameraRig progressRef={progressRef} />
    </Canvas>
  );
}
