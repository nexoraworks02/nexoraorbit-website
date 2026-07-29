"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ProgressRef } from "@/lib/hero-scroll/useScrollProgress";
import { HERO_ANCHOR_X, HERO_ANCHOR_Y, HERO_MARK_SPAN } from "@/lib/hero-scroll/heroScrollAnchor";

const ease = (x: number) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * A scattered particle field that converges into the NEXORA "X" silhouette —
 * two crossing diagonal strokes — as scroll progress advances, then fades out
 * once the real logo (LogoReveal) has faded in through it. Positions are
 * computed once (useMemo) and mutated in place per frame (useFrame) — no
 * per-frame allocation, no React re-render.
 */
export function ParticleConvergence({ progressRef, count }: { progressRef: ProgressRef; count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, targets, geometry } = useMemo(() => {
    // Deterministic seeded PRNG (not Math.random) — keeps this memo a pure
    // function of `count`, matching the pattern already used in the hero-lab
    // WebGL particle field.
    let seed = 20240611;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };

    const strokeCount = Math.max(20, Math.floor(count / 2));
    const total = strokeCount * 2;
    const positions = new Float32Array(total * 3);
    const targets = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);
    const blue = new THREE.Color("#3b82ff");
    const purple = new THREE.Color("#7c3aed");
    let idx = 0;

    for (let strokeDir = -1; strokeDir <= 1; strokeDir += 2) {
      for (let i = 0; i < strokeCount; i += 1) {
        const start = 6 + rand() * 6;
        const theta0 = rand() * Math.PI * 2;
        const phi0 = Math.acos(2 * rand() - 1);
        positions[idx * 3] = start * Math.sin(phi0) * Math.cos(theta0);
        positions[idx * 3 + 1] = start * Math.sin(phi0) * Math.sin(theta0);
        positions[idx * 3 + 2] = start * Math.cos(phi0) - 2;

        const along = (i / (strokeCount - 1) - 0.5) * HERO_MARK_SPAN;
        const widthJitter = (rand() - 0.5) * 0.3;
        const nx = -strokeDir;
        const ny = 1;
        const norm = Math.sqrt(nx * nx + ny * ny);
        // Aspect-corrected diagonal so the strokes align with the logo's real
        // width:height ratio instead of drifting off-angle toward the tips.
        const yAspect = 0.911;
        targets[idx * 3] = along + (nx / norm) * widthJitter + HERO_ANCHOR_X;
        targets[idx * 3 + 1] = strokeDir * along * yAspect + (ny / norm) * widthJitter * yAspect + HERO_ANCHOR_Y;
        targets[idx * 3 + 2] = (rand() - 0.5) * 0.25;

        const c = blue.clone().lerp(purple, i / strokeCount);
        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;
        idx += 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return { positions, targets, geometry };
  }, [count]);

  const bokehTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(220,230,255,0.6)");
      gradient.addColorStop(1, "rgba(200,220,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(() => {
    // Mutate the geometry reached via the ref (the sanctioned imperative
    // escape hatch), not the plain variable captured from useMemo — animating
    // BufferAttribute arrays in place every frame is the standard, necessary
    // three.js pattern (recreating the geometry per frame would be far too
    // expensive for a particle field this size).
    const points = pointsRef.current;

    if (!points) {
      return;
    }

    const p = progressRef.current;
    const conv = ease(clamp01(p / 0.8));
    const posAttr = points.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < positions.length; i += 1) {
      array[i] = positions[i] + (targets[i] - positions[i]) * conv;
    }

    posAttr.needsUpdate = true;

    const fade = ease(clamp01((p - 0.78) / 0.17));
    (points.material as THREE.PointsMaterial).opacity = 0.9 * (1 - fade);
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.09}
        map={bokehTexture}
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
