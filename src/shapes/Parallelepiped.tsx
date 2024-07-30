import { useMemo } from "react";

interface IParallelepipedProps {
  angle?: number;
  depth: number;
  height: number;
  length: number;
}

export default function Parallelepiped(props: IParallelepipedProps) {
  const { angle = 0.46364760398864746, depth, height, length } = props;
  const vertices = useMemo(() => {
    const elevation = Math.tan(angle) * length;
    const xMin = - depth / 2;
    const xMax = depth / 2;
    const zMin = - length / 2;
    const zMax = length / 2;
    // prettier-ignore
    return new Float32Array([
        // Front
        xMin, 0, zMin,
        xMax, 0, zMin,
        xMin, height, zMin,
        xMax, 0, zMin,
        xMax, height, zMin,
        xMin, height, zMin,
        // Back
        xMin, elevation, zMax,
        xMin, elevation + height, zMax,
        xMax, elevation, zMax,
        xMax, elevation, zMax,
        xMin, elevation + height, zMax,
        xMax, elevation + height, zMax,
        // Right side
        xMin, 0, zMin,
        xMin, height, zMin,
        xMin, elevation, zMax,
        xMin, height, zMin,
        xMin, elevation + height, zMax,
        xMin, elevation, zMax,
        // Left side
        xMax, 0, zMin,
        xMax, elevation, zMax,
        xMax, height, zMin,
        xMax, height, zMin,
        xMax, elevation, zMax,
        xMax, elevation + height, zMax,
        // Bottom
        xMin, 0, zMin,
        xMax, elevation, zMax,
        xMax, 0, zMin,
        xMin, 0, zMin,
        xMin, elevation, zMax,
        xMax, elevation, zMax,
        // Top
        xMin, height, zMin,
        xMax, height, zMin,
        xMax, elevation + height, zMax,
        xMin, height, zMin,
        xMax, elevation + height, zMax,
        xMin, elevation + height, zMax,
      ])
  }, [angle, depth, height, length]);

  return (
    <bufferGeometry attach="geometry" onUpdate={self => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        array={vertices}
        itemSize={3}
        count={36}
      />
    </bufferGeometry>
  );
}
