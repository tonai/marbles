import { memo, useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"

import { IModel } from "../../../helpers/collection"
import GLTFModel, { IModelProps } from "../../GLTFModel"
import { RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useGame } from "../../../store/game"

interface IGhostBallProps extends IModelProps {
  model: IModel
  playerId: string
}

function GhostBall(props: IGhostBallProps) {
  const { model, playerId, ...modelProps } = props
  const ghost = useGame((state) => state.ghosts[playerId])
  const ballRef = useRef<RapierRigidBody>(null)

  useFrame(() => {
    const ball = ballRef.current
    if (ball) {
      const position = ball.translation()
      if (position) {
        ball.setNextKinematicTranslation({
          x: position.x + ghost.movement.x,
          y: position.y + ghost.movement.y,
          z: position.z + ghost.movement.z,
        })
      }
    }
  }, 2)

  useEffect(() => {
    const ball = ballRef.current
    if (ball) {
      ball.setNextKinematicTranslation({
        x: ghost.position.x,
        y: ghost.position.y,
        z: ghost.position.z,
      })
    }
  }, [ghost.position.x, ghost.position.y, ghost.position.z])

  return (
    <RigidBody
      ref={ballRef}
      colliders="ball"
      restitution={0.5}
      scale={0.3}
      type="kinematicPosition"
    >
      <GLTFModel {...modelProps} model={model} />
    </RigidBody>
  )
}

const MemoGhostBall = memo(GhostBall)
export default MemoGhostBall
