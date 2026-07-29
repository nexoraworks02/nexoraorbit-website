"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import type { ProgressRef } from "@/lib/hero-scroll/useScrollProgress";
import { HERO_ANCHOR_X, HERO_ANCHOR_Y, HERO_MARK_SPAN } from "@/lib/hero-scroll/heroScrollAnchor";

// The shine-sweep amplitudes below were originally tuned against a 4-unit-wide
// mark; scale them down to whatever HERO_MARK_SPAN actually is so the sweep
// still traces the strokes' real (now much smaller) length.
const SWEEP_SCALE = HERO_MARK_SPAN / 4;

const ease = (x: number) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * Key/rim/fill lighting plus two progress-driven effects: a soft purple glow
 * sprite that blooms in behind the logo, and a small bright point light that
 * sweeps across both diagonal strokes of the X once the reveal has settled —
 * a real moving specular highlight on the material, not an overlay.
 */
export function ScrollLights({ progressRef }: { progressRef: ProgressRef }) {
  const rimRef = useRef<THREE.PointLight>(null);
  const fillRef = useRef<THREE.PointLight>(null);
  const shineRef = useRef<THREE.PointLight>(null);
  const glowRef = useRef<THREE.Sprite>(null);

  const glowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, "rgba(160,120,255,0.95)");
      gradient.addColorStop(0.45, "rgba(130,90,255,0.5)");
      gradient.addColorStop(1, "rgba(130,90,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    const p = progressRef.current;
    const t = state.clock.elapsedTime;

    const glowBuild = ease(clamp01((p - 0.3) / 0.45));
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.SpriteMaterial;
      material.opacity = 1.1 * glowBuild;
      glowRef.current.scale.setScalar(6 + Math.sin(t * 0.6) * 0.4);
    }

    const settle = ease(clamp01((p - 0.95) / 0.05));
    if (rimRef.current) rimRef.current.intensity = 12 * (1 - 0.85 * settle);
    if (fillRef.current) fillRef.current.intensity = 3 * (1 - 0.85 * settle);

    // Shine sweep loops only once the reveal has fully settled (p ~= 1), and
    // traces BOTH diagonal strokes each cycle so the highlight passes over
    // all four arms rather than just one path through the middle.
    if (shineRef.current) {
      if (p > 0.96) {
        const loop = 8;
        const cycle = (t % loop) / loop;
        if (cycle < 0.45) {
          const q = cycle / 0.45;
          shineRef.current.intensity = Math.sin(q * Math.PI) * 10;
          shineRef.current.position.set(
            HERO_ANCHOR_X + (-1.9 + q * 3.8) * SWEEP_SCALE,
            HERO_ANCHOR_Y + (-1.6 + q * 3.2) * SWEEP_SCALE,
            1.4 * SWEEP_SCALE,
          );
        } else if (cycle < 0.9) {
          const q = (cycle - 0.45) / 0.45;
          shineRef.current.intensity = Math.sin(q * Math.PI) * 10;
          shineRef.current.position.set(
            HERO_ANCHOR_X + (1.9 - q * 3.8) * SWEEP_SCALE,
            HERO_ANCHOR_Y + (-1.6 + q * 3.2) * SWEEP_SCALE,
            1.4 * SWEEP_SCALE,
          );
        } else {
          shineRef.current.intensity = 0;
        }
      } else {
        shineRef.current.intensity = 0;
      }
    }
  });

  return (
    <>
      <directionalLight color="#dfe9ff" intensity={2.2} position={[3.5, 4, 5]} />
      <pointLight ref={rimRef} color="#9a6bff" intensity={12} distance={24} position={[-3.5, 1, -3.5]} />
      <pointLight ref={fillRef} color="#6ea8ff" intensity={3} distance={20} position={[-1, -2, 4]} />
      <pointLight ref={shineRef} color="#ffffff" intensity={0} distance={7} position={[-2.1, 0.55, 1.4]} />

      <sprite ref={glowRef} scale={[9, 9, 1]} position={[HERO_ANCHOR_X, HERO_ANCHOR_Y, -0.3]}>
        <spriteMaterial
          map={glowTexture}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>

      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={2.2} color="#2563ff" position={[-3, 2, 3]} scale={[5, 5, 1]} />
        <Lightformer form="rect" intensity={1.6} color="#7c3aed" position={[4, 1, -3]} scale={[5, 5, 1]} />
        <Lightformer form="circle" intensity={1.2} color="#eaf2ff" position={[0, 4, 2]} scale={3} />
      </Environment>
    </>
  );
}
