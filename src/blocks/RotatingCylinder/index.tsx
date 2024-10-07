import { memo, useRef } from "react";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { BackSide, FrontSide } from "three";

import {
  cylinderHeight,
  cylinderHighRadius,
  cylinderLowRadius,
  pilarHeight,
  pilarRadius,
} from "../../constants/blocks";
import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";

import Joints from "../Joints";

const angle = Math.tanh(
  cylinderHeight / (cylinderHighRadius - cylinderLowRadius),
);

function getPosition(x: number, z: number): [number, number, number] {
  const dist = Math.sqrt(
    (Math.abs(x) - cylinderLowRadius) ** 2 +
      (Math.abs(z) - cylinderLowRadius) ** 2,
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
  }, 2);

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
