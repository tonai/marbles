import { useRef } from "react";
import { ThreeElements } from "@react-three/fiber";
import { Mesh, RepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";
import { origin, xVector, yVector, zVector } from "../../constants/vector";

type MeshProps = ThreeElements["mesh"];

interface IPlanProps extends MeshProps {
  x?: number;
  z?: number;
}

export default function CheckBoard(props: IPlanProps) {
  const { x = 1, z = 1 } = props;
  const xSize = Math.ceil(x / 4);
  const zSize = Math.ceil(z / 4);
  const meshRef = useRef<Mesh>(null!);
  const map = useTexture(`/checkerboard.png`);
  map.wrapS = RepeatWrapping;
  map.wrapT = RepeatWrapping;
  map.repeat.set(xSize, zSize);

  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
        position={[xSize * 2, 0, zSize * 2]}
        rotation={[-Math.PI * 0.5, 0, 0]}
      >
        <planeGeometry args={[xSize * 4, zSize * 4]} />
        <meshMatcapMaterial map={map} />
      </mesh>
      <arrowHelper args={[xVector, origin, 1, 0xff0000]} />
      <arrowHelper args={[yVector, origin, 1, 0x00ff00]} />
      <arrowHelper args={[zVector, origin, 1, 0x0000ff]} />
    </>
  );
}
