import { memo } from "react";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide, FrontSide } from "three";

import { pachinkoDepth, pachinkoHeight, pachinkoWidth, pilarRadius, twoThird } from "../../constants/blocks";
import { IBlockProps } from "../../types";
import { useBlock } from "../../hooks/useBlock";

import Joints from "../Joints";

function Pachinko(props: IBlockProps) {
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
      <mesh position={[0, 0, 0.5]}>
        <planeGeometry
          args={[pachinkoWidth, pachinkoHeight]}
        />
        <meshPhysicalMaterial side={DoubleSide} metalness={0} roughness={0.2} transmission={0} thickness={0.3} ior={1} reflectivity={0.5} opacity={0.5} transparent depthWrite={false} />
      </mesh>
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry
          args={[pachinkoWidth, pachinkoHeight]}
        />
        <meshStandardMaterial color="#a878e8" side={DoubleSide} />
      </mesh>
      <mesh position={[-pachinkoHeight / 2 - 0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry
          args={[pachinkoDepth, pachinkoHeight]}
        />
        <meshStandardMaterial color="#a878e8" side={DoubleSide} />
      </mesh>
      <mesh position={[pachinkoHeight / 2 + 0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry
          args={[pachinkoDepth, pachinkoHeight]}
        />
        <meshStandardMaterial color="#a878e8" side={DoubleSide} />
      </mesh>
      <mesh position={[0, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-0.5, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[0.5, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-1, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[1, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-1.5, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[1.5, twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01, 32, 1, false, Math.PI, Math.PI]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[0.25, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-0.25, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[0.75, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-0.75, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[1.25, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-1.25, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[0, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-0.5, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[0.5, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-1, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[1, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[-1.5, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <mesh position={[1.5, - twoThird, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[pilarRadius, pilarRadius, pachinkoDepth - 0.01, 32, 1, false, Math.PI, Math.PI]} />
        <meshStandardMaterial color="#868ba1" side={FrontSide} />
      </mesh>
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoPachinko = memo(Pachinko);
export default MemoPachinko;