import { defaultLevel } from "./constants/blocks";
import { randomRange } from "./helpers/math";
import { IGhost } from "./types";

Dusk.initLogic({
  minPlayers: 1,
  maxPlayers: 6,
  reactive: false,
  setup: (allPlayerIds) => ({
    ghosts: {},
    level: defaultLevel,
    playerIds: allPlayerIds,
    start: false,
  }),
  actions: {
    start: (level, { game }) => {
      if (game.start) {
        game.start = false;
      } else {
        game.level = level;
        let x = 0.2;
        const y = 1;
        game.ghosts = Object.fromEntries(
          game.playerIds.map((id) => {
            x = -x;
            // const x = randomRange(0.3, -0.3);
            // const y = randomRange(1, 0.5);
            return [
              id,
              {
                playerId: id,
                position: { x, y, z: -0.2 },
                movement: { x: 0, y: 0, z: 0 },
              },
            ];
          }),
        );
        game.start = true;
      }
    },
    updateGhost: (ghost: IGhost, { game }) => {
      game.ghosts[ghost.playerId] = ghost;
    },
  },
});
