import { useEffect } from "react"
import { Color, Mesh, MeshStandardMaterial } from "three"

import { ballModel } from "../../constants/blocks"
import { IModelProps } from "../GLTFModel"
// import GhostBall from "./GhostBall";
// import PlayerBall from "./PlayerBall";
import { useGame } from "../../store/game"
import FreeBall from "./FreeBall"

interface IBallProps extends IModelProps {
  playerId: string
}

export default function Ball(props: IBallProps) {
  const { playerId, ...modelProps } = props
  const ghost = useGame((state) => state.ghosts[playerId])
  const models = useGame((state) => state.models)
  const model = models?.[ballModel]

  useEffect(() => {
    const material = (model?.gltf.scene.children[0] as Mesh)
      .material as MeshStandardMaterial
    material.color = new Color(0xff0000)
    material.opacity = 0.8
  }, [model])

  return (
    <FreeBall {...modelProps} ghost={ghost} model={model} playerId={playerId} />
  )

  // if (playerId !== yourPlayerId) {
  //   return <GhostBall {...modelProps} model={model} playerId={playerId} />;
  // }

  // return <PlayerBall {...modelProps} model={model} />;
}
