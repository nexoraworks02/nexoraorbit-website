"use client";

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

/**
 * Restrained post-processing: selective bloom on the emissive nodes/highlights
 * plus a soft vignette. Desktop/laptop only (gated by the caller).
 */
export function PostFX() {
  return (
    <EffectComposer>
      <Bloom intensity={0.35} luminanceThreshold={0.55} luminanceSmoothing={0.25} mipmapBlur />
      <Vignette darkness={0.6} offset={0.32} />
    </EffectComposer>
  );
}
