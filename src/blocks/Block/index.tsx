import { memo } from "react"
import { RigidBody } from "@react-three/rapier"

import GLTFModel from "../../components/GLTFModel"
import { IBlockProps } from "../../types"
import { useBlock } from "../../hooks/useBlock"
import { useGame } from "../../store/game"

import Joints from "../Joints"

function Block(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props
  const { position, rotation } = useBlock(pos, rot)
  const models = useGame((state) => state.models)

  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <GLTFModel model={models?.[id]} />
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  )
}

const MemoBlock = memo(Block)
export default MemoBlock
