import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ILevel } from "../../types";
import { Vector3 } from "three";
import { blocks } from "../../blocks";
import { IModel } from "../../helpers/collection";

interface ICameraProps {
  level: ILevel;
  models: Record<string, IModel>;
}

export default function FreeCamera(props: ICameraProps) {
  const { level, models } = props;


  return (
    <>
      {/* <PerspectiveCamera makeDefault /> */}
      <OrbitControls />
    </>
  );

  // const xMaxs = [];
  // const yMaxs = [];
  // const zMaxs = [];
  // const xMins = [];
  // const yMins = [];
  // const zMins = [];

  // for (const blockLevel of level) {
  //   const { id } = blockLevel;
  //   const block = blocks[id];
  //   const x = block.x || models[block.models[0]].vector.x;
  //   const y = block.y || models[block.models[0]].vector.y;
  //   const z = block.z || models[block.models[0]].vector.z;
  //   const position: undefined | Vector3 = blockLevel.position;
  //   xMaxs.push((position?.x ?? 0) + x);
  //   yMaxs.push((position?.y ?? 0) + y);
  //   zMaxs.push((position?.z ?? 0) + z);
  //   xMins.push(position?.x ?? 0);
  //   yMins.push(position?.y ?? 0);
  //   zMins.push(position?.z ?? 0);
  // }
  // const xMax = Math.max(...xMaxs);
  // const yMax = Math.max(...yMaxs);
  // const zMax = Math.max(...zMaxs);
  // const xMin = Math.min(...xMins);
  // const yMin = Math.min(...yMins);
  // const zMin = Math.min(...zMins);
  // const xDist = xMax - xMin;
  // const yDist = yMax - yMin;
  // const zDist = zMax - zMin;
  // const position = new Vector3(xDist * 3, yDist * 3, zDist * 3);

  // return (
  //   <>
  //     <PerspectiveCamera makeDefault position={position} />
  //     <OrbitControls position={position} />
  //   </>
  // );
}
