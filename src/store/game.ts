import { create } from "zustand";
import { MutableRefObject } from "react";
import { RapierRigidBody } from "@react-three/rapier";
import { GameState, IGameStore } from "../types";
import { IModel } from "../helpers/collection";

export const useGame = create<IGameStore>((set) => ({
  ballRef: { current: null },
  ghosts: {},
  level: [],
  models: null,
  playerId: "",
  playerIds: [],
  start: false,
  setBallRef: (ballRef: MutableRefObject<RapierRigidBody | null>) => set({ ballRef }),
  setGameState: (game: Partial<GameState>) => set(game),
  setModels: (models: Record<string, IModel>) => set({ models }),
  setPlayerId: (playerId: string) => set({ playerId }),
}));
