"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

/**
 * Cinematic camera: a GSAP boot dolly on mount (deep → rest, Power4.out), then
 * an ambient loop takes over — slow azimuth drift + damped pointer parallax +
 * a subtle scroll-driven forward push (read directly in the frame loop, no
 * scroll listener, no scroll-jacking).
 */
export function CameraRig({ boot = true }: { boot?: boolean }) {
  const { camera } = useThree();
  const bootDone = useRef(!boot);
  const targetPointer = useRef({ x: 0, y: 0 });
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    camera.position.set(0, 1.4, 14);
    camera.lookAt(0, -0.3, 0);

    let tween: gsap.core.Tween | undefined;
    if (boot) {
      bootDone.current = false;
      tween = gsap.to(camera.position, {
        x: 0,
        y: 0.6,
        z: 6.8,
        duration: 3,
        ease: "power4.out",
        onUpdate: () => camera.lookAt(0, -0.3, 0),
        onComplete: () => {
          bootDone.current = true;
        },
      });
    } else {
      camera.position.set(0, 0.6, 6.8);
      camera.lookAt(0, -0.3, 0);
      bootDone.current = true;
    }

    return () => {
      tween?.kill();
    };
  }, [boot, camera]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      targetPointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", onMove);
    }
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (!bootDone.current) return;

    // Use the camera off the frame state (not the hook-returned reference) so
    // imperative R3F mutation is idiomatic and lint-clean.
    const cam = state.camera;
    const root = typeof document !== "undefined" ? document.querySelector<HTMLElement>(".hl-root") : null;
    const scrollProgress = root ? Number(root.style.getPropertyValue("--hl-scroll")) || 0 : 0;
    const ecosystemProgress = root ? Number(root.style.getPropertyValue("--hl-ecosystem")) || 0 : 0;

    pointer.current.x += (targetPointer.current.x - pointer.current.x) * 0.05;
    pointer.current.y += (targetPointer.current.y - pointer.current.y) * 0.05;

    const t = state.clock.elapsedTime;
    const orbit = Math.sin(t * 0.15) * (0.28 + scrollProgress * 0.08);

    const targetX = orbit + pointer.current.x * 0.45 + ecosystemProgress * 0.7;
    const targetY = 0.6 - pointer.current.y * 0.3 - scrollProgress * 0.35;
    const targetZ = 6.8 - scrollProgress * 4.2;

    cam.position.x += (targetX - cam.position.x) * 0.06;
    cam.position.y += (targetY - cam.position.y) * 0.06;
    cam.position.z += (targetZ - cam.position.z) * 0.06;
    cam.lookAt(ecosystemProgress * 0.8, -0.3 - scrollProgress * 0.22, 0);
  });

  return null;
}
