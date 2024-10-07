import { memo } from "react";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";
// import { TransformControls as TransformControlsImpl } from "three-stdlib";
// import { TransformControls } from "@react-three/drei";

import { IModel } from "../../../helpers/collection";
import GLTFModel, { IModelProps } from "../../GLTFModel";
import { IGhost } from "../../../types";

interface IFreeBallProps extends IModelProps {
  ghost: IGhost;
  model?: IModel;
  playerId: string;
}

function FreeBall(props: IFreeBallProps) {
  const { ghost, model, playerId, ...modelProps } = props;
  // const startPosition = useRef(
  //   new Vector3(ghost.position.x, ghost.position.y, ghost.position.z),
  // );
  // const transformControls = useRef<TransformControlsImpl>(null);
  // const ballRef = useGame((state) => state.ballRef);
  // const orbitControls = useGame((state) => state.orbitControls);
  // const yourPlayerId = useGame((state) => state.playerId);

  // useEffect(() => {
  //   const { current: controls } = transformControls;
  //   if (controls) {
  //     const callback = (event: any) => {
  //       if (orbitControls.current) {
  //         orbitControls.current.enabled = !event.value;
  //       }
  //     };
  //     controls.addEventListener("dragging-changed", callback);
  //     return () => controls.removeEventListener("dragging-changed", callback);
  //   }
  // }, [orbitControls]);

  // useEffect(() => {
  //   const { current: controls } = transformControls;
  //   if (controls) {
  //     const callback = () => {
  //       const position = ballRef.current?.collider(0).translation();
  //       console.log(position);
  //     };
  //     controls.addEventListener("change", callback);
  //     return () => controls.removeEventListener("change", callback);
  //   }
  // }, []);

  return (
    <RigidBody
      colliders="ball"
      position={new Vector3(ghost.position.x, ghost.position.y, ghost.position.z)}
      restitution={0.5}
      scale={0.5}
    >
      <GLTFModel {...modelProps} model={model} />
    </RigidBody>
  );
}

const MemoFreeBall = memo(FreeBall);
export default MemoFreeBall;
