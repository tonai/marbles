import { memo, useEffect, useRef } from "react"
import { RapierRigidBody, RigidBody } from "@react-three/rapier"
import { BackSide } from "three"

import { IBlockProps } from "../../types"
import { useBlock } from "../../hooks/useBlock"

import Joints from "../Joints"
import Parallelepiped from "../../shapes/Parallelepiped"
import { useFrame } from "@react-three/fiber"

const delta = 0.25
const speed = 0.1

function Escalator(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props
  const { position, rotation } = useBlock(pos, rot)
  const bodyRef1 = useRef<RapierRigidBody | null>(null)
  const bodyRef2 = useRef<RapierRigidBody | null>(null)
  const bodyRef3 = useRef<RapierRigidBody | null>(null)
  const bodyRef4 = useRef<RapierRigidBody | null>(null)
  const bodyRef5 = useRef<RapierRigidBody | null>(null)
  const bodyRef6 = useRef<RapierRigidBody | null>(null)
  const bodyRef7 = useRef<RapierRigidBody | null>(null)
  const bodyRef8 = useRef<RapierRigidBody | null>(null)
  const startYPos = useRef(0)
  const dir = useRef(speed)

  useEffect(() => {
    if (bodyRef1.current) {
      startYPos.current = bodyRef1.current.translation().y
    }
  }, [])

  useFrame(() => {
    if (
      bodyRef1.current &&
      bodyRef2.current &&
      bodyRef3.current &&
      bodyRef4.current &&
      bodyRef5.current &&
      bodyRef6.current &&
      bodyRef7.current &&
      bodyRef8.current
    ) {
      const y = bodyRef1.current.translation().y - startYPos.current
      if (y >= delta) {
        dir.current = -speed
      } else if (y <= 0) {
        dir.current = speed
      }
      bodyRef1.current.setLinvel({ x: 0, y: dir.current, z: 0 }, true)
      bodyRef2.current.setLinvel({ x: 0, y: -dir.current, z: 0 }, true)
      bodyRef3.current.setLinvel({ x: 0, y: -dir.current, z: 0 }, true)
      bodyRef4.current.setLinvel({ x: 0, y: dir.current, z: 0 }, true)
      bodyRef5.current.setLinvel({ x: 0, y: dir.current, z: 0 }, true)
      bodyRef6.current.setLinvel({ x: 0, y: -dir.current, z: 0 }, true)
      bodyRef7.current.setLinvel({ x: 0, y: -dir.current, z: 0 }, true)
      bodyRef8.current.setLinvel({ x: 0, y: dir.current, z: 0 }, true)
    }
  }, 2)

  /*
  const startTime = useGame((state) => state.startTime);
  useFrame((args) => {
    const time = args.clock.elapsedTime; // Dusk.gameTime() - startTime;
    const x = position?.x ?? 0;
    const y = position?.y ?? 0;
    const z = position?.z ?? 0;
    if (bodyRef1.current) {
      bodyRef1.current.setNextKinematicTranslation({
        x,
        y: y - 0.225 + Math.cos(time) * 0.125,
        z,
      });
    }
    if (bodyRef2.current) {
      bodyRef2.current.setNextKinematicTranslation({
        x,
        y: y - 0.225 + Math.cos(Math.PI + time) * 0.125,
        z,
      });
    }
    if (bodyRef3.current) {
      bodyRef3.current.setNextKinematicTranslation({
        x,
        y: y - 0.075 + Math.cos(Math.PI + time) * 0.125,
        z,
      });
    }
    if (bodyRef4.current) {
      bodyRef4.current.setNextKinematicTranslation({
        x,
        y: y - 0.075 + Math.cos(time) * 0.125,
        z,
      });
    }
    if (bodyRef5.current) {
      bodyRef5.current.setNextKinematicTranslation({
        x,
        y: y + 0.075 + Math.cos(time) * 0.125,
        z,
      });
    }
    if (bodyRef6.current) {
      bodyRef6.current.setNextKinematicTranslation({
        x,
        y: y + 0.075 + Math.cos(Math.PI + time) * 0.125,
        z,
      });
    }
    if (bodyRef7.current) {
      bodyRef7.current.setNextKinematicTranslation({
        x,
        y: y + 0.225 + Math.cos(Math.PI + time) * 0.125,
        z,
      });
    }
    if (bodyRef8.current) {
      bodyRef8.current.setNextKinematicTranslation({
        x,
        y: y + 0.225 + Math.cos(time) * 0.125,
        z,
      });
    }
  });
  */

  return (
    <>
      <RigidBody
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="fixed"
      >
        <mesh position={[0.425, 0, 0]}>
          <Parallelepiped depth={0.15} height={0.5} length={1} />
          <meshStandardMaterial color="#a878e8" side={BackSide} />
        </mesh>
        <mesh position={[-0.425, 0, 0]}>
          <Parallelepiped depth={0.15} height={0.5} length={1} />
          <meshStandardMaterial color="#a878e8" side={BackSide} />
        </mesh>
        <Joints joints={joints} position={position} rotation={rotation} />
      </RigidBody>
      <RigidBody
        ref={bodyRef1}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[0.175, -0.35, -0.375]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef2}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[-0.175, -0.1, -0.375]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef3}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[0.175, 0.05, -0.125]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef4}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[-0.175, -0.2, -0.125]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef5}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[0.175, -0.05, 0.125]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef6}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[-0.175, 0.2, 0.125]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef7}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[0.175, 0.35, 0.375]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={bodyRef8}
        {...groupProps}
        colliders="trimesh"
        position={position}
        rotation={rotation}
        type="kinematicVelocity"
      >
        <mesh position={[-0.175, 0.1, 0.375]} rotation={[0, Math.PI, 0]}>
          <Parallelepiped
            angle={Math.PI / 16}
            depth={0.35}
            height={0.5}
            length={0.25}
          />
          <meshStandardMaterial color="#ffc044" side={BackSide} />
        </mesh>
      </RigidBody>
    </>
  )
}

const MemoEscalator = memo(Escalator)
export default MemoEscalator
