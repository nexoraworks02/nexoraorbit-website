import { Environment, Lightformer } from "@react-three/drei";

/**
 * Purple-signature lighting (storyboard): soft violet-white key, a dominant
 * PURPLE rim ("purple reflections"), dark ambient. Procedural Environment
 * (violet + purple + soft white Lightformers) gives the glass podium and the
 * X model their purple reflections offline.
 */
export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.18} color="#120a24" />
      <hemisphereLight args={["#160b30", "#050308", 0.3]} />
      {/* Key — soft violet-white, upper left */}
      <directionalLight position={[-4, 5, 3]} intensity={1.1} color="#e5d8ff" />
      {/* Rim — purple, dominant, rear right */}
      <directionalLight position={[5, 1.5, -4]} intensity={1.9} color="#8b5cf6" />
      {/* Signal / podium accent */}
      <pointLight position={[0, -1, 2]} intensity={1} color="#a855f7" distance={9} decay={2} />

      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={2.4} color="#7c3aed" position={[-3, 2, 3]} scale={[5, 5, 1]} />
        <Lightformer form="rect" intensity={1.8} color="#a855f7" position={[4, 1, -3]} scale={[5, 5, 1]} />
        <Lightformer form="circle" intensity={1.1} color="#efeaff" position={[0, 4, 2]} scale={3} />
      </Environment>
    </>
  );
}
