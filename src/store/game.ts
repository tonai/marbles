import { create } from "zustand";
import { MutableRefObject } from "react";
import { RapierRigidBody } from "@react-three/rapier";
import { GameState, IGameStore, Mode } from "../types";
import { IModel } from "../helpers/collection";

export const useGame = create<IGameStore>((set) => ({
  ballRef: { current: null },
  ghosts: {},
  level: [],
  mode: Mode.WAIT,
  models: null,
  playerId: "",
  playerIds: [],
  start: false,
  setBallRef: (ballRef: MutableRefObject<RapierRigidBody | null>) => set({ ballRef }),
  setGameState: (game: Partial<GameState>) => set(game),
  setModels: (models: Record<string, IModel>) => set({ models }),
  setPlayerId: (playerId: string) => set({ playerId }),
  setStartTime: (startTime: number) => set({ startTime }),
  startTime: 0,
}));
