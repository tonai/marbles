import { memo, useRef } from "react";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { BackSide, FrontSide } from "three";

import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";

import Joints from "../Joints";

const lowRadius = 0.25;
const highRadius = 2.5;
const height = 1;
const angle = Math.tanh(height / (highRadius - lowRadius));

const pilarRadius = 0.125;
const pilarHeight = 0.5;

function getPosition(x: number, z: number): [number, number, number] {
  const dist = Math.sqrt(
    (Math.abs(x) - lowRadius) ** 2 + (Math.abs(z) - lowRadius) ** 2,
  );
  const y = Math.tan(angle) * (dist - pilarRadius);
  return [x, y - pilarHeight / 2, z];
}

function RotatingCylinder(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props;
  const { position, rotation } = useBlock(pos, rot);
  const ref = useRef<RapierRigidBody | null>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.setAngvel({ x: 0, y: 1, z: 0 }, true);
    }
  });

  return (
    <RigidBody
      ref={ref}
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="kinematicVelocity"
    >
      <mesh>
        <cylinderGeometry args={[highRadius, lowRadius, height, 32, 1, true]} />
        <meshStandardMaterial color="#ffc044" side={BackSide} />
      </mesh>
      <mesh position={[0, -0.625, 0]}>
        <cylinderGeometry args={[lowRadius, lowRadius, 0.25, 32, 1, true]} />
        <meshStandardMaterial color="#ffc044" side={BackSide} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[highRadius, highRadius + 0.25]} />
        <meshStandardMaterial color="#a878e8" side={BackSide} />
      </mesh>
      <mesh position={[0, -0.125, 0]}>
        <cylinderGeometry args={[highRadius + 0.25, lowRadius, height + 0.25, 32, 1, true]} />
        <meshStandardMaterial color="#a878e8" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(1, 0)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(-1, 0)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(0, 1)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(0, -1)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(1.2, 1.2)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(1.2, -1.2)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(-1.2, 1.2)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={getPosition(-1.2, -1.2)}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoRotatingCylinder = memo(RotatingCylinder);
export default MemoRotatingCylinder;
