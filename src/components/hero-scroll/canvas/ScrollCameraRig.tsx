"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ProgressRef } from "@/lib/hero-scroll/useScrollProgress";
import { HERO_ANCHOR, HERO_RING_NDC_X, HERO_RING_NDC_Y } from "@/lib/hero-scroll/heroScrollAnchor";

const ease = (x: number) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const WORLD_UP = new THREE.Vector3(0, 1, 0);

/**
 * Camera dolly-in driven purely by scroll progress (0..0.9 of the reveal),
 * settling into a slow, confident breathing hold once the show has resolved —
 * no spin, no sudden moves. Damped follow (not a direct jump) so reversing
 * scroll direction still feels weighted rather than snapping backward.
 *
 * The camera does NOT look straight at the mark (that would always center
 * it). Instead it pans by a fixed angular offset — derived once from the fov
 * so it holds regardless of dolly distance — so the mark lands where the
 * decorative double ring sits on screen (HERO_RING_NDC_X/Y) instead of dead
 * center. Verified numerically against three.js's own projection (not just
 * visually, since this environment can't play the scroll animation live).
 */
export function ScrollCameraRig({ progressRef }: { progressRef: ProgressRef }) {
  const anchor = useMemo(() => new THREE.Vector3(...HERO_ANCHOR), []);

  useFrame((state) => {
    const p = progressRef.current;
    const cam = state.camera as THREE.PerspectiveCamera;
    const t = state.clock.elapsedTime;
    const dolly = ease(clamp01(p / 0.9));
    const idle = ease(clamp01((p - 0.95) / 0.05));

    const targetX = 1.4 - dolly * 1.4 + Math.sin(t * 0.05) * 0.3 * idle;
    const targetY = 0.3 - dolly * 0.1 + Math.sin(t * 0.045) * 0.03 * idle;
    const targetZ = 9 - dolly * 5 + Math.sin(t * 0.04) * 0.15 * idle;

    cam.position.x += (targetX - cam.position.x) * 0.08;
    cam.position.y += (targetY - cam.position.y) * 0.08;
    cam.position.z += (targetZ - cam.position.z) * 0.08;

    const baseForward = anchor.clone().sub(cam.position).normalize();
    const right = new THREE.Vector3().crossVectors(baseForward, WORLD_UP).normalize();
    const up = new THREE.Vector3().crossVectors(right, baseForward).normalize();

    const halfFovV = THREE.MathUtils.degToRad(cam.fov / 2);
    const halfFovH = Math.atan(Math.tan(halfFovV) * cam.aspect);
    const angleH = Math.atan(HERO_RING_NDC_X * Math.tan(halfFovH));
    const angleV = Math.atan(HERO_RING_NDC_Y * Math.tan(halfFovV));

    const pannedForward = baseForward
      .applyAxisAngle(up, angleH)
      .applyAxisAngle(right, -angleV);

    cam.lookAt(cam.position.clone().add(pannedForward));
  });

  return null;
}
