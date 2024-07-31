import { DoubleSide, Curve, Vector3 } from "three";
import { RigidBody } from "@react-three/rapier";

import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";

import Joints from "../Joints";
import { memo } from "react";

class CustomSinCurve extends Curve<Vector3> {
  scale;

  constructor(scale = 1) {
    super();
    this.scale = scale;
  }

  getPoint(t: number, optionalTarget = new Vector3()) {
    const tx = 0;
    const ty = Math.sin(2 * Math.PI * t) * 2;
    const tz = t * 6;

    return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
  }
}

const path = new CustomSinCurve();

function Tube(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props;
  const { position, rotation } = useBlock(pos, rot);

  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <mesh position={[0, 0.3, -0.2]} rotation={[Math.PI / 2, 2 * Math.PI / 6, 0]}>
        <tubeGeometry args={[path, 64, 0.5, 12, false]} />
        <meshPhysicalMaterial side={DoubleSide} metalness={0} roughness={0.2} transmission={0} thickness={0.3} ior={1} reflectivity={0.5} opacity={0.5} transparent depthWrite={false} />
      </mesh>
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoTube = memo(Tube);
export default MemoTube;
