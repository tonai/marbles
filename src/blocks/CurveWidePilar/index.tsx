import { memo } from "react";
import { FrontSide } from "three";
import { RigidBody } from "@react-three/rapier";

import GLTFModel from "../../components/GLTFModel";
import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";
import { useGame } from "../../store/game";
import { pilarHeight, pilarRadius } from "../../constants/blocks";

import Joints from "../Joints";

function CurveWidePilar(props: IBlockProps) {
  const { id, joints, position: pos, rotation: rot, ...groupProps } = props;
  const { position, rotation } = useBlock(pos, rot);
  const models = useGame(state => state.models);

  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <GLTFModel model={models?.["curve-wide"]} />
      <mesh position={[-0.25, 0.5, -0.25]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pilarHeight]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <Joints joints={joints} position={position} rotation={rotation}/>
    </RigidBody>
  );
}

const MemoCurveWidePilar = memo(CurveWidePilar);
export default MemoCurveWidePilar;
