import { ballRadius, defaultLevel } from "./constants/blocks"
import { IRanges, getRandomPosition } from "./helpers/ball"
import { serializeLevel } from "./helpers/level"
import { IGhost, Mode, Vector } from "./types"

const ranges: IRanges = {
  x: [1.5 - ballRadius, -1.5 + ballRadius],
  y: [1 + ballRadius, 2 - ballRadius],
  z: [0.5 - ballRadius, -0.5 + ballRadius],
}

function getGhosts(allPlayerIds: string[]): Record<string, IGhost> {
  const positions: Vector[] = []
  for (let i = 0; i < allPlayerIds.length; i++) {
    positions.push(getRandomPosition(ranges, positions))
  }
  return Object.fromEntries(
    allPlayerIds.map((id, i) => [
      id,
      {
        playerId: id,
        position: positions[i],
        movement: { x: 0, y: 0, z: 0 },
      },
    ])
  )
}

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 6,
  reactive: false,
  setup: (allPlayerIds) => ({
    ghosts: getGhosts(allPlayerIds),
    level: serializeLevel(defaultLevel),
    mode: Mode.WAIT,
    playerIds: allPlayerIds,
    start: false,
  }),
  actions: {
    start: (level, { game }) => {
      if (game.start) {
        game.start = false
      } else {
        if (level) {
          game.level = level
        }
        game.start = true
      }
    },
    setPosition: (position, { game, playerId }) => {
      game.ghosts[playerId].position = position
    },
    setMode: (mode, { game }) => {
      game.mode = mode
    },
    // updateGhost: (ghost: IGhost, { game }) => {
    //   game.ghosts[ghost.playerId] = ghost;
    // },
  },
  events: {
    playerJoined(playerId, { game }) {
      if (!game.start) {
        game.playerIds.push(playerId)
        game.ghosts[playerId] = {
          playerId: playerId,
          position: getRandomPosition(
            ranges,
            Object.values(game.ghosts).map((ghost) => ghost.position)
          ),
          movement: { x: 0, y: 0, z: 0 },
        }
      }
    },
  },
})
