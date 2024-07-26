import type { PlayerId, DuskClient } from "dusk-games-sdk/multiplayer";
import { ComponentType, MutableRefObject } from "react";
import { RapierRigidBody, RigidBodyProps } from "@react-three/rapier";
import { Euler, Vector3 } from "three";

import { IModel } from "../helpers/collection";

export interface IJoint {
  dir: Vector3;
  pos: Vector3;
}

export interface IBlock {
  Component?: ComponentType<IBlockProps>;
  joints: IJoint[];
  models?: string[];
  x?: number;
  y?: number;
  z?: number;
  part?: string;
}

export type IBlocks = Record<string, IBlock>;

export interface Vector {
  x: number;
  y: number;
  z: number;
}

export interface IBlockProps
  extends Omit<RigidBodyProps, "id" | "position" | "rotation"> {
  id: string;
  joints: IJoint[];
  position?: Vector3 | Vector;
  rotation?: Euler | Vector;
}

export type IBlockLevel = {
  id: string;
  position?: Vector3;
  rotation?: Euler;
};

export type ILevel = IBlockLevel[];

export type ISerializedBlockLevel = {
  id: string;
  position?: Vector;
  rotation?: Vector;
};

export type ISerializedLevel = ISerializedBlockLevel[];

export interface ISelectedJoint {
  baseJoin: IJoint;
  position: Vector3;
  rotation: Euler;
  selectedPart: string;
  targetJoint: IJoint;
}

export interface IGhost {
  playerId: string;
  position: Vector;
  movement: Vector;
}

export type IGhosts = Record<string, IGhost>;

export interface GameState {
  ghosts: IGhosts;
  level: ISerializedLevel;
  playerIds: PlayerId[];
  start: boolean;
}

export type GameActions = {
  start: (level: ISerializedLevel) => void;
  updateGhost: (args: IGhost) => void;
};

declare global {
  const Dusk: DuskClient<GameState, GameActions>;
}

export interface IGameContext {
  onJoint: (
    joint: IJoint,
    part: string,
    position?: Vector3,
    rotation?: Euler,
  ) => void;
  selectedPart?: string;
}

export interface IGameStore extends GameState {
  ballRef: MutableRefObject<RapierRigidBody | null>;
  models: Record<string, IModel> | null;
  playerId: string;
  setBallRef: (ballRef: MutableRefObject<RapierRigidBody | null>) => void;
  setGameState: (game: Partial<GameState>) => void;
  setModels: (models: Record<string, IModel>) => void;
  setPlayerId: (playerId: string) => void;
}
