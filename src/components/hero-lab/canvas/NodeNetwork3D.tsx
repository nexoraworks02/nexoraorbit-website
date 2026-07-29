"use client";

import { Line } from "@react-three/drei";

/**
 * Sparse glowing data nodes + a few connection lines near the core. Emissive
 * (toneMapped=false) so bloom picks them up cleanly. Static geometry — cheap.
 */
const NODES: [number, number, number][] = [
  [1.7, 1.2, 0.5],
  [-1.9, 0.8, -0.3],
  [2.1, -0.6, 0.2],
  [-1.5, -1.3, 0.4],
  [0.4, 1.9, -0.5],
  [-0.6, -2, 0.3],
  [2.5, 0.3, -0.6],
  [-2.3, -0.2, 0.5],
];

const LINKS: [number, number][] = [
  [0, 4],
  [4, 1],
  [1, 7],
  [2, 6],
  [3, 5],
  [0, 2],
];

export function NodeNetwork3D() {
  return (
    <group>
      {NODES.map((position, i) => (
        <mesh key={`node-${i}`} position={position}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#c4a0ff" toneMapped={false} />
        </mesh>
      ))}
      {LINKS.map(([a, b], i) => (
        <Line
          key={`link-${i}`}
          points={[NODES[a], NODES[b]]}
          color="#8b5cf6"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  );
}
