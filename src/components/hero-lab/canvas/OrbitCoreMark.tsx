"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

const NEXORA_X_MODEL_PATH = "/brand/models/nexora-orbit-color-x-3d.glb";

/**
 * Official NEXORA "X" GLB, presented per the storyboard: fit to a sensible size
 * (the raw model is ~24 units and flat), stood upright to face the camera with a
 * slight 3D tilt, and re-skinned as glossy brand purple (the authored material
 * is a dull grey spec-gloss that modern three.js can't render correctly).
 * Breathes subtly through scale.
 */
export function OrbitCoreMark() {
  const breatheRef = useRef<Group>(null);
  const gltf = useGLTF(NEXORA_X_MODEL_PATH);

  const { object, fitScale } = useMemo(() => {
    const cloned = gltf.scene.clone(true);

    const purple = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#7c3aed"),
      metalness: 0.35,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
      envMapIntensity: 1.4,
      emissive: new THREE.Color("#3b1a8c"),
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide,
    });

    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = purple;
      }
    });

    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    return { object: cloned, fitScale: 4 / maxDim };
  }, [gltf]);

  useFrame((state) => {
    if (breatheRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
      breatheRef.current.scale.setScalar(fitScale * pulse);
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.5} floatingRange={[-0.05, 0.05]}>
      {/* Outer: slight 3D angle. Inner ref: fit-scale + breathing. Innermost: stand the flat X upright. */}
      <group rotation={[0.05, -0.35, 0]}>
        <group ref={breatheRef} scale={fitScale}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Center>
              <primitive object={object} />
            </Center>
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload(NEXORA_X_MODEL_PATH);
