import { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import { blocks } from "../../blocks/index.tsx";
import Block from "../../blocks/Block/index.tsx";
import { ILevel } from "../../types/index.ts";
import { IModel } from "../../helpers/collection.ts";

import Ball from "../Ball/index.tsx";
import FpCamera from "../FpCamera/index.tsx";
import { OrbitControls } from "@react-three/drei";
import { useGame } from "../../store/game.ts";

interface ISceneProps {
  camera: "free" | "fp";
  level: ILevel;
  models: Record<string, IModel>;
}

function Scene(props: ISceneProps) {
  const { camera, level: editLevel, models } = props;
  const playLevel = useGame((state) => state.level);
  const playerIds = useGame((state) => state.playerIds);
  const start = useGame((state) => state.start);
  const level = start ? playLevel : editLevel;

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight args={[0xffffff, Math.PI]} position={[10, 10, 5]} />
      {(camera === "free" || !start) && <OrbitControls />}
      {camera === "fp" && start && <FpCamera />}
      <Suspense>
        <Physics debug={false} colliders={false}>
          {level.map(({ id, position, rotation }, i) => {
            const { joints } = blocks[id];
            const Component = blocks[id].Component || Block;
            return (
              <Component
                key={i}
                id={id}
                joints={joints}
                models={models}
                position={position}
                rotation={rotation}
              />
            );
          })}
          {start &&
            playerIds.map((playerId) => (
              <Ball key={playerId} playerId={playerId} models={models} />
            ))}
          {/* {start && <Ball models={models} x={0.4} y={1.3} z={-0.4} />}
          {start && <Ball models={models} x={-0.4} y={1.3} z={-0.4} />}
          {start && <Ball models={models} x={0} y={1.7} z={-0.4} />}
          {start && <Ball models={models} x={0.4} y={1.7} z={-0.2} />}
          {start && <Ball models={models} x={-0.4} y={1.7} z={-0.2} />} */}
        </Physics>
      </Suspense>
    </Canvas>
  );
}

const MemoScene = memo(Scene);
export default MemoScene;
