"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Instanced-style additive point cloud reading as calm "data intelligence".
 * Positions are seeded/deterministic; the whole cloud rotates slowly for a
 * gentle orbital drift (one transform — GPU cheap, no per-point CPU work).
 */
export function ParticleField3D({ count = 2500 }: { count?: number }) {
  const groupRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let seed = 20240611;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i += 1) {
      // Denser near the logo center, thinning outward (spawn: logo center).
      const radius = 1.2 + Math.pow(rand(), 1.6) * 8;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (rand() - 0.5) * 7.5;
      arr[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) * 0.6 - 1;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.72}
        color="#b28bff"
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
