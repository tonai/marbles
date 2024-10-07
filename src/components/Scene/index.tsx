import { Suspense, memo, useEffect, useState } from "react";
import { Physics } from "@react-three/rapier";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";

import { blocks } from "../../blocks/index.tsx";
import Block from "../../blocks/Block/index.tsx";
import { ILevel, Mode } from "../../types/index.ts";
import { useGame } from "../../store/game.ts";

import Ball from "../Ball/index.tsx";
import TpCamera from "../TpCamera/index.tsx";
import Background from "../Background/index.ts";
import FreeCamera from "../FreeCamera/index.tsx";
import { FrontSide } from "three";

interface ISceneProps {
  camera?: "free" | "fp";
  level?: ILevel;
}

function Render() {
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
  }, 3);
  return null;
}

function Scene(props: ISceneProps) {
  const { camera = "free", level: editLevel } = props;
  const playLevel = useGame((state) => state.level);
  const playerIds = useGame((state) => state.playerIds);
  const mode = useGame((state) => state.mode);
  const start = useGame((state) => state.start);
  // const startTime = useGame((state) => state.startTime);
  // const setStartTime = useGame((state) => state.setStartTime);
  const [paused, setPaused] = useState(true);
  const level = editLevel || playLevel;

  function handlePlacement(event: ThreeEvent<MouseEvent>) {
    Dusk.actions.setPosition(event.point);
  }

  useEffect(() => {
    if (start) {
      setTimeout(() => setPaused(false), 1000);
    }
  }, [start]);

  return (
    <Canvas>
      <Render />
      <Background />
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight args={[0xffffff, Math.PI]} position={[10, 10, 5]} />
      {(camera === "free" || !start) && <FreeCamera />}
      {camera === "fp" && start && <TpCamera />}
      <Suspense>
        <Physics
          debug={false}
          colliders={false}
          paused={paused}
          updatePriority={1}
        >
          {level.map(({ id, position, rotation }, i) => {
            const { joints } = blocks[id];
            const Component = blocks[id].Component || Block;
            return (
              <Component
                key={i}
                id={id}
                joints={joints}
                position={position}
                rotation={rotation}
              />
            );
          })}
          {playerIds.map((playerId) => (
            <Ball key={playerId} playerId={playerId} />
          ))}
        </Physics>
      </Suspense>
      {mode === Mode.PLAY && paused && (
        <mesh position={[0, 1.5, 0]} onClick={handlePlacement}>
          <planeGeometry args={[3, 1]} />
          <meshPhysicalMaterial
            color="#ff0000"
            side={FrontSide}
            metalness={0}
            roughness={0.2}
            transmission={0}
            thickness={0.3}
            ior={1}
            reflectivity={0.5}
            opacity={0.5}
            transparent
            depthWrite={false}
          />
        </mesh>
      )}
    </Canvas>
  );
}

const MemoScene = memo(Scene);
export default MemoScene;
