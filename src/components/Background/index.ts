import { useEffect } from "react";
import { EquirectangularReflectionMapping, TextureLoader } from "three";
import { useLoader, useThree } from "@react-three/fiber";

import bg from "./planet.jpeg";

export default function Background(): null {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, bg);

  useEffect(() => {
    texture.mapping = EquirectangularReflectionMapping;
    texture.needsUpdate = true;
    scene.background = texture;
    scene.environment = texture;
  }, [scene, texture]);

  return null;
}