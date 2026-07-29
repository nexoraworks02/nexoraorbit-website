"use client";

import { Grid } from "@react-three/drei";

/**
 * The hero "podium" (storyboard Scene 8): a dark glass disc the NEXORA X stands
 * on, a bright violet rim-glow around its top edge, concentric glowing floor
 * rings, and a faint purple perspective grid fading into fog. Purple throughout
 * to match the brand storyboard.
 */
export function SystemPlatform() {
  return (
    <group position={[0, -1.95, 0]}>
      {/* Glass podium disc */}
      <mesh>
        <cylinderGeometry args={[1.55, 1.72, 0.16, 64]} />
        <meshPhysicalMaterial
          color="#1a0f33"
          metalness={0.4}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.15}
          envMapIntensity={1.3}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Bright rim glow on the podium's top edge */}
      <mesh position={[0, 0.085, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.028, 12, 160]} />
        <meshBasicMaterial color="#b57bff" toneMapped={false} />
      </mesh>

      {/* Concentric glowing floor rings */}
      {[2.1, 2.75, 3.5].map((radius, i) => (
        <mesh key={radius} position={[0, -0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.012, 8, 160]} />
          <meshBasicMaterial color="#8b5cf6" toneMapped={false} transparent opacity={0.5 - i * 0.13} />
        </mesh>
      ))}

      {/* Faint purple perspective grid fading into the fog */}
      <Grid
        position={[0, -0.1, 0]}
        args={[40, 40]}
        cellSize={0.7}
        cellThickness={0.5}
        cellColor="#2a1a52"
        sectionSize={3.5}
        sectionThickness={1}
        sectionColor="#7c3aed"
        fadeDistance={30}
        fadeStrength={2.5}
        infiniteGrid
        followCamera={false}
      />
    </group>
  );
}
