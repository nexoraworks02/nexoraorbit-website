"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { SceneLights } from "./SceneLights";
import { OrbitCoreMark } from "./OrbitCoreMark";
import { ParticleField3D } from "./ParticleField3D";
import { NodeNetwork3D } from "./NodeNetwork3D";
import { SystemPlatform } from "./SystemPlatform";
import { CameraRig } from "./CameraRig";
import { PostFX } from "./PostFX";

export type HeroLabCanvasProps = {
  /** Run the render loop; false pauses rendering (offscreen / motion off). */
  active?: boolean;
  /** Play the boot dolly on mount. */
  boot?: boolean;
  /** Enable bloom/vignette (desktop/laptop only). */
  postfx?: boolean;
  particleCount?: number;
  dprCap?: number;
};

/**
 * The WebGL hero scene. Mounted client-only (via HeroLab3DScene's dynamic
 * import) so it never runs during SSR. Transparent background lets the page's
 * dark surface show through.
 */
export function HeroLabCanvas({
  active = true,
  boot = true,
  postfx = true,
  particleCount = 2500,
  dprCap = 2,
}: HeroLabCanvasProps) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, dprCap]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 1.6, 13] }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1;
      }}
    >
      <fogExp2 attach="fog" args={["#050816", 0.03]} />
      <SceneLights />
      <Suspense fallback={null}>
        <OrbitCoreMark />
      </Suspense>
      <SystemPlatform />
      <ParticleField3D count={particleCount} />
      <NodeNetwork3D />
      <CameraRig boot={boot} />
      {postfx ? <PostFX /> : null}
    </Canvas>
  );
}
