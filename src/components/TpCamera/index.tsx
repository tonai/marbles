import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera, Vector3 } from "three";

import { useGame } from "../../store/game";

export default function TpCamera() {
  const ballRef = useGame(state => state.ballRef);
  const { camera, set, size } = useThree(({ camera, set, size }) => ({ camera, set, size }));
  const prevPosition = useRef(new Vector3(0, 0, 0));
  const prevMovement = useRef(new Vector3(0, 0, 0));
  const cameraRef = useRef<PerspectiveCamera>(null);

  useFrame(() => {
    const camera = cameraRef.current;
    const position = ballRef.current?.collider(0).translation();
    if (position && camera) {
      const movement = new Vector3(
        position.x - prevPosition.current.x,
        position.y - prevPosition.current.y,
        position.z - prevPosition.current.z,
      ).normalize();
      const newPosition = new Vector3(position.x, position.y, position.z);
      prevPosition.current = newPosition;
      if (movement.x !== 0 && movement.y !== 0 && movement.z !== 0) {
        prevMovement.current = movement;
      }
      const wantedPosition = new Vector3(position.x - prevMovement.current.x, position.y + Math.max(1, - prevMovement.current.y * 2), position.z - prevMovement.current.z);
      cameraRef.current.position.lerp(wantedPosition, 0.1);
      cameraRef.current.lookAt(newPosition);
    }
  }, 2);

  useEffect(() => {
    const newCam = cameraRef.current;
    if (newCam) {
      const oldCam = camera;
      newCam.aspect = size.width / size.height
      set(() => ({ camera: newCam }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, set, size]);

  return <perspectiveCamera ref={cameraRef} />;
}
