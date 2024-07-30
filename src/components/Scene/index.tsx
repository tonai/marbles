import { Suspense, memo, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";

import { blocks } from "../../blocks/index.tsx";
import Block from "../../blocks/Block/index.tsx";
import { ILevel } from "../../types/index.ts";
import { useGame } from "../../store/game.ts";

import Ball from "../Ball/index.tsx";
import FpCamera from "../FpCamera/index.tsx";

interface ISceneProps {
  camera?: "free" | "fp";
  level?: ILevel;
}

function Scene(props: ISceneProps) {
  const { camera = "free", level: editLevel } = props;
  const playLevel = useGame((state) => state.level);
  const playerIds = useGame((state) => state.playerIds);
  const start = useGame((state) => state.start);
  const startTime = useGame((state) => state.startTime);
  const setStartTime = useGame((state) => state.setStartTime);
  const level = editLevel || playLevel;

  useEffect(() => {
    if (start) {
      setTimeout(() => setStartTime(Dusk.gameTime()), 1000);
    }
  }, [start, setStartTime]);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight args={[0xffffff, Math.PI]} position={[10, 10, 5]} />
      {(camera === "free" || !start) && <OrbitControls />}
      {camera === "fp" && start && <FpCamera />}
      <Suspense>
        <Physics debug={false} colliders={false} paused={!startTime}>
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
    </Canvas>
  );
}

const MemoScene = memo(Scene);
export default MemoScene;
