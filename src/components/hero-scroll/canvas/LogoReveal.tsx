"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { ProgressRef } from "@/lib/hero-scroll/useScrollProgress";
import { HERO_ANCHOR, HERO_MARK_SPAN } from "@/lib/hero-scroll/heroScrollAnchor";

const NEXORA_X_MODEL_PATH = "/brand/models/nexora-orbit-color-x-3d.glb";
const ease = (x: number) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * The official NEXORA "X" GLB, fit/oriented the same way as the hero-lab
 * prototype's OrbitCoreMark, but revealed gradually THROUGH the dissolving
 * particle field as scroll progress crosses ~0.55-1.0, rather than appearing
 * instantly — the particles read as a shell peeling away from the real mark.
 */
export function LogoReveal({ progressRef }: { progressRef: ProgressRef }) {
  const gltf = useGLTF(NEXORA_X_MODEL_PATH);
  const groupRef = useRef<THREE.Group>(null);

  const { object, fitScale, materials } = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    const materials: THREE.MeshPhysicalMaterial[] = [];
    // One cohesive blue material across every mesh part — shading variation
    // comes from the light rig (key/rim/fill), not from swapping base colors
    // per part, which reads as flat disconnected panels instead of a single
    // lit surface. The subtle purple comes through via the rim light
    // reflecting off the clearcoat, not from the base color itself.
    const baseColor = "#2f6bff";

    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(baseColor),
          metalness: 0.55,
          roughness: 0.22,
          clearcoat: 0.6,
          clearcoatRoughness: 0.2,
          emissive: new THREE.Color(baseColor).multiplyScalar(0.08),
          envMapIntensity: 1.3,
          transparent: true,
          opacity: 0,
        });
        mesh.material = material;
        materials.push(material);
      }
    });

    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    // Fit to the same span the particle X converges to (HERO_MARK_SPAN), not
    // an arbitrary fixed size — otherwise the resolved logo pops in at a
    // different size than the shape the particles just traced.
    return { object: cloned, fitScale: HERO_MARK_SPAN / maxDim, materials };
  }, [gltf]);

  useFrame((state) => {
    const p = progressRef.current;
    const revealScale = ease(clamp01((p - 0.55) / 0.3));
    const opacity = ease(clamp01((p - 0.7) / 0.25));
    const breatheAmount = ease(clamp01((p - 0.92) / 0.08));
    const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.015 * breatheAmount;

    if (groupRef.current) {
      groupRef.current.scale.setScalar(Math.max(0.001, fitScale * revealScale * breathe));
    }

    materials.forEach((material) => {
      material.opacity = opacity;
    });
  });

  return (
    <group position={HERO_ANCHOR} rotation={[0.05, -0.35, 0]}>
      <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]}>
        <Center>
          <primitive object={object} />
        </Center>
      </group>
    </group>
  );
}

useGLTF.preload(NEXORA_X_MODEL_PATH);
