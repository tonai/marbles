import { useEffect, useRef, useState } from "react";

import { IModel, loadModels } from "./helpers/collection.ts";
import Game from "./components/Game/index.tsx";

import { blocks } from "./blocks";
import { ballModel } from "./constants/blocks.ts";
import { useGame } from "./store/game.ts";
import { RapierRigidBody } from "@react-three/rapier";

const modelList = new Set(
  Object.entries(blocks)
    .map(([key, Component]) => Component.models ?? key)
    .flat()
    .concat(ballModel),
);

function App() {
  const [models, setModels] = useState<Record<string, IModel>>();
  const ballRef = useRef<RapierRigidBody>(null);
  const playerId = useGame((state) => state.playerId);
  const setBallRef = useGame((state) => state.setBallRef);
  const setGameState = useGame((state) => state.setGameState);
  const setPlayerId = useGame((state) => state.setPlayerId);

  useEffect(() => {
    loadModels(Array.from(modelList), "/models/").then(setModels);
    setBallRef(ballRef);
  }, [setBallRef]);

  useEffect(() => {
    if (models) {
      Dusk.initClient({
        onChange: ({ game, yourPlayerId }) => {
          setGameState(game);
          if (yourPlayerId) {
            setPlayerId(yourPlayerId);
          }
        },
      });
    }
  }, [models, setGameState, setPlayerId]);

  if (!models || !playerId) {
    // Dusk only shows your game after an onChange() so no need for loading screen
    return;
  }

  return <Game models={models} />;
}

export default App;
