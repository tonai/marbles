import { memo } from "react"
import { RigidBody } from "@react-three/rapier"
import { BackSide, FrontSide } from "three"

import { IBlockProps } from "../../types"
import { useBlock } from "../../hooks/useBlock"

import Joints from "../Joints"
import {
  cylinderHeight,
  cylinderHighRadius,
  cylinderLowRadius,
} from "../../constants/blocks"

function Cylinder(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props
  const { position, rotation } = useBlock(pos, rot)

  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <mesh>
        <cylinderGeometry
          args={[
            cylinderHighRadius,
            cylinderLowRadius,
            cylinderHeight,
            32,
            1,
            true,
          ]}
        />
        <meshStandardMaterial color="#ffc044" side={BackSide} />
      </mesh>
      <mesh position={[0, -0.625, 0]}>
        <cylinderGeometry
          args={[cylinderLowRadius, cylinderLowRadius, 0.25, 32, 1, true]}
        />
        <meshStandardMaterial color="#ffc044" side={BackSide} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[cylinderHighRadius, cylinderHighRadius + 0.25]} />
        <meshStandardMaterial color="#a878e8" side={BackSide} />
      </mesh>
      <mesh position={[0, -0.125, 0]}>
        <cylinderGeometry
          args={[
            cylinderHighRadius + 0.25,
            cylinderLowRadius,
            cylinderHeight + 0.25,
            32,
            1,
            true,
          ]}
        />
        <meshStandardMaterial color="#a878e8" side={FrontSide} />
      </mesh>
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  )
}

const MemoCylinder = memo(Cylinder)
export default MemoCylinder
