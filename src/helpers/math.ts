import { Vector } from "../types";

export function randomRange(max: number, min = 0) {
  return Math.random() * (max - min) + min;
}

export function randomInt(max: number, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getDistance(p1: Vector, p2: Vector) {
  return Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2 + (p2.z - p1.z)**2)
}