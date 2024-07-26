import { useEffect, useRef } from "react";

import { loadModels } from "./helpers/collection.ts";

import { blocks } from "./blocks";
import { ballModel } from "./constants/blocks.ts";
import { useGame } from "./store/game.ts";
import { RapierRigidBody } from "@react-three/rapier";
import StartScreen from "./components/StartScreen/index.tsx";

const modelList = new Set(
  Object.entries(blocks)
    .map(([key, Component]) => Component.models ?? key)
    .flat()
    .concat(ballModel),
);

function App() {
  const ballRef = useRef<RapierRigidBody>(null);
  const models = useGame((state) => state.models);
  const playerId = useGame((state) => state.playerId);
  const setBallRef = useGame((state) => state.setBallRef);
  const setGameState = useGame((state) => state.setGameState);
  const setPlayerId = useGame((state) => state.setPlayerId);
  const setModels = useGame((state) => state.setModels);

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

  return <StartScreen />;
}

export default App;
