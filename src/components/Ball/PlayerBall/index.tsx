import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { IModel } from "../../../helpers/collection";
import GLTFModel, { IModelProps } from "../../GLTFModel";
import { memo, useRef } from "react";
import { Vector } from "../../../types";
import { useGame } from "../../../store/game";

interface IPlayerBallProps extends IModelProps {
  model: IModel;
}

function PlayerBall(props: IPlayerBallProps) {
  const { model, ...modelProps } = props;
  const playerId = useGame(state => state.playerId);
  const ballRef = useGame(state => state.ballRef);
  const ghost = useGame(state => state.ghosts[state.playerId]);
  const prevPosition = useRef<Vector>(ghost.position);
  const startPosition = useRef(
    new Vector3(
      ghost.position.x,
      ghost.position.y,
      ghost.position.z,
    ),
  );
  const counter = useRef(-1);

  useFrame(() => {
    const position = ballRef.current?.translation();
    if (position) {
      if (counter.current === 0) {
        Dusk.actions.updateGhost({
          playerId,
          position: {
            x: position.x,
            y: position.y,
            z: position.z,
          },
          movement: {
            x: position.x - prevPosition.current.x,
            y: position.y - prevPosition.current.y,
            z: position.z - prevPosition.current.z,
          },
        });
      }
      prevPosition.current = position;
      counter.current++;
      if (counter.current === 8) {
        counter.current = 0;
      }
    }
  });

  return (
    <RigidBody
      ref={ballRef}
      colliders="ball"
      position={startPosition.current}
      restitution={0.5}
      scale={0.3}
    >
      <GLTFModel {...modelProps} model={model} />
    </RigidBody>
  );
}

const MemoPlayerBall = memo(PlayerBall);
export default MemoPlayerBall;
