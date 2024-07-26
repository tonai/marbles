import { memo } from "react";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";

import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";

import Joints from "../Joints";

function Cylinder(props: IBlockProps) {
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
       <mesh>
         <cylinderGeometry args={[2.5, 0.25, 1, 32, 1, true]} />
         <meshStandardMaterial color="#868ba1" side={DoubleSide} />
         {/* <meshStandardMaterial color="#ffc044" side={BackSide} /> */}
         {/* <meshStandardMaterial color="#a878e8" side={FrontSide} /> */}
       </mesh>
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoCylinder = memo(Cylinder);
export default MemoCylinder;
