import { Vector } from "../types"
import { getDistance, randomRange } from "./math"

export interface IRanges {
  x: [number, number]
  y: [number, number]
  z: [number, number]
}

export function getRandomPosition(
  ranges: IRanges,
  positions: Vector[],
  radius: number = 0.12
): Vector {
  const vector = {
    x: randomRange(...ranges.x),
    y: randomRange(...ranges.y),
    z: randomRange(...ranges.z),
  }
  const collision = positions.some((pos) => getDistance(pos, vector) < radius)
  if (collision) {
    return getRandomPosition(ranges, positions, radius)
  }
  return vector
}
