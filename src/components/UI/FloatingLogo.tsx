import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

interface FloatingLogoProps {
  path: string;
  position: [number, number, number];
  scale?: number;
  speed?: number;
  spin?: boolean;
  bounce?: boolean;
  bounceHeight?: number;
  initialRotation?: [number, number, number]; // new
}

export const FloatingLogo: React.FC<FloatingLogoProps> = ({
  path,
  position,
  scale = 1,
  speed = 1,
  spin = true,
  bounce = true,
  bounceHeight = 0.2,
  initialRotation = [0, 0, 0],
}) => {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(path);

  // Set initial rotation once on mount
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(...initialRotation);
    }
  }, [initialRotation]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      if (spin) {
        ref.current.rotation.y += 0.01 * speed;
      }
      if (bounce) {
        ref.current.position.y = position[1] + Math.sin(t * speed) * bounceHeight;
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={[scale, scale, scale]}
    />
  );
};

useGLTF.preload("/models/LightRoom.gltf");
useGLTF.preload("/models/AfterEffetcs.gltf");
useGLTF.preload("/models/PhotoShop.gltf");
useGLTF.preload("/models/PremierePro.gltf");
