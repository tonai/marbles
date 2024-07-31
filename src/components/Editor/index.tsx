import { useCallback, useMemo, useState } from "react";
import { Euler, Quaternion, Vector3 } from "three";

import { gameContext } from "../../contexts/game";
import { IBlockLevel, IJoint, ISelectedJoint } from "../../types";
import { blocks } from "../../blocks";
import { defaultParts } from "../../constants/blocks";

import EditorHeader from "../EditorHeader";
import Scene from "../Scene";

import styles from "./styles.module.css";
import { useGame } from "../../store/game";

export default function Editor() {
  const [level, setLevel] = useState([{ id: "pachinko" }]);
  const [parts, setParts] = useState(defaultParts);
  const setGameState = useGame((state) => state.setGameState);
  const start = useGame((state) => state.start);
  const [selectedPart, setSelectedPart] = useState<string>();
  const [jointSelection, setJointSelection] = useState<ISelectedJoint>();
  const [key, setKey] = useState(0);

  function handleStart() {
    if (!start) {
      setSelectedPart(undefined);
      setJointSelection(undefined);
      setGameState({ start: true });
    } else {
      setGameState({ start: false });
      setKey((x) => x + 1);
    }
  }

  function handleSelect(part: string) {
    if (!selectedPart) {
      // Select
      setSelectedPart(part);
    } else {
      if (part === selectedPart) {
        // unselect
        setSelectedPart(undefined);
        setJointSelection(undefined);
      } else {
        // Switch
        setSelectedPart(part);
      }
    }
  }

  function handleSwitch() {
    if (jointSelection) {
      const { joints } = blocks[jointSelection.selectedPart];
      let index = joints.indexOf(jointSelection.targetJoint) + 1;
      if (index === joints.length) {
        index = 0;
      }
      const newSelection = {
        ...jointSelection,
        targetJoint: joints[index],
      };
      removeLastBlock();
      setJointSelection(newSelection);
      addBlockToLevel(
        newSelection.baseJoin,
        newSelection.selectedPart,
        newSelection.targetJoint,
        newSelection.position,
        newSelection.rotation,
      );
    }
  }

  function handleRemove() {
    const block = level[level.length - 1];
    setParts((parts) => ({
      ...parts,
      [block.id]: parts[block.id] + 1,
    }));
    removeLastBlock();
    setJointSelection(undefined);
  }

  function removeLastBlock() {
    setLevel((level) => level.slice(0, level.length - 1));
  }

  const addBlockToLevel = useCallback(
    (
      joint: IJoint,
      selectedPart: string,
      targetJoint: IJoint,
      position: Vector3 = new Vector3(0, 0, 0),
      rotation: Euler = new Euler(0, 0, 0),
    ) => {
      const jointDir = targetJoint.dir.clone().multiplyScalar(-1);
      const baseRotation = new Quaternion().setFromEuler(rotation);
      const quaternion = new Quaternion()
        .setFromUnitVectors(jointDir, joint.dir)
        .multiply(baseRotation);
      const jointPos = targetJoint.pos
        .clone()
        .multiplyScalar(-1)
        .applyQuaternion(quaternion);
      setLevel((level) => {
        const block: IBlockLevel = {
          id: selectedPart,
          position: position
            .clone()
            .add(joint.pos.clone().applyQuaternion(baseRotation))
            .add(jointPos),
          rotation: new Euler().setFromQuaternion(quaternion),
        };
        return level.concat(block);
      });
    },
    [],
  );

  const onJoint = useCallback(
    (
      joint: IJoint,
      selectedPart: string,
      position: Vector3 = new Vector3(0, 0, 0),
      rotation: Euler = new Euler(0, 0, 0),
    ) => {
      const targetJoint = blocks[selectedPart].joints[0];
      setParts((parts) => ({
        ...parts,
        [selectedPart]: parts[selectedPart] - 1,
      }));
      setJointSelection({
        baseJoin: joint,
        selectedPart,
        position,
        rotation,
        targetJoint,
      });
      addBlockToLevel(joint, selectedPart, targetJoint, position, rotation);
    },
    [addBlockToLevel],
  );

  const context = useMemo(
    () => ({
      onJoint,
      selectedPart,
    }),
    [onJoint, selectedPart],
  );

  return (
    <gameContext.Provider value={context}>
      <EditorHeader
        jointSelection={jointSelection}
        level={level}
        onRemove={handleRemove}
        onSelect={handleSelect}
        onStart={handleStart}
        onSwitch={handleSwitch}
        parts={parts}
        selectedPart={selectedPart}
      />
      <div className={styles.flex1}>
        <Scene key={key} level={level} />
      </div>
    </gameContext.Provider>
  );
}
