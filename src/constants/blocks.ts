import { ILevel } from "../types"
import { deserializeLevel } from "../helpers/level"

export const cylinderLowRadius = 0.25
export const cylinderHighRadius = 2.5
export const cylinderHeight = 1

export const pilarRadius = 0.05
export const pilarHeight = 0.5

export const pachinkoHeight = 2
export const pachinkoWidth = 3
export const pachinkoDepth = 1
export const twoThird = 2 / 3

export const ballRadius = 0.125

export const partMenu: Record<string, string[]> = {
  Bends: ["bend", "bend-medium", "bend-large"],
  Bumps: ["bump-a", "bump-b", "bump-c", "bump-d"],
  Curves: [
    "corner",
    "curve",
    "curve-large",
    "s-curve-left",
    "s-curve-right",
    "s-curve-left-large",
    "s-curve-right-large",
    "wave-a",
    "wave-b",
    "wave-c",
  ],
  Helixes: [
    "helix-quarter-left",
    "helix-quarter-right",
    "helix-large-quarter-left",
    "helix-large-quarter-right",
    "helix-half-left",
    "helix-half-right",
    "helix-large-half-left",
    "helix-large-half-right",
    "helix-left",
    "helix-right",
    "helix-large-left",
    "helix-large-right",
  ],
  Ramps: [
    "ramp-long-a",
    "ramp-long-b",
    "ramp-long-c",
    "ramp-long-d",
    "ramp-end-a",
    "ramp-end-b",
    "ramp-end-c",
    "ramp-end-d",
    "slant-a",
    "slant-b",
    "slant-c",
    "slant-d",
    // "slant-long-a",
    // "slant-long-b",
    // "slant-long-c",
    // "slant-long-d",
    "ramp-start-a",
    "ramp-start-b",
    "ramp-start-c",
    "ramp-start-d",
  ],
  Splits: [
    "cross",
    "split-double",
    "split-double-sides",
    "split-large-left",
    "split-large-right",
    "split-left",
    "split-right",
  ],
  Straights: ["straight", "straight-hole", "end-rounded", "end"],
  Wides: [
    "funnel",
    "funnel-long",
    "straight-wide",
    "straight-wide-hole",
    "curve-wide",
    "curve-wide-medium",
    "curve-wide-large",
  ],
  Dynamics: ["rotating-cylinder", "escalator"],
  OtherWides: [
    "straight-wide-pilar",
    "straight-wide-pilars",
    "curve-wide-pilar",
  ],
  Others: [
    "cylinder",
    "slant-a-pilar",
    "slant-b-pilar",
    "slant-c-pilar",
    "slant-d-pilar",
    "tube",
    "pachinko",
    "pachinko-end",
  ],
}
export const ballModel = "marble-low"

export const defaultParts: Record<string, number> = Object.fromEntries(
  Object.values(partMenu)
    .flat()
    .map((id) => [id, Infinity])
)

export const defaultLevel: ILevel = deserializeLevel([
  {
    id: "pachinko",
  },
  {
    id: "pachinko-end",
    position: {
      x: 0,
      y: -2,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  {
    id: "ramp-end-a",
    position: {
      x: 0,
      y: -3.625,
      z: 0,
    },
    rotation: {
      x: -3.1415927410125732,
      y: 0,
      z: -3.1415927410125732,
    },
  },
  {
    id: "slant-a",
    position: {
      x: 2.185569414336901e-8,
      y: -3.8749999125772217,
      z: 1.000000021855698,
    },
    rotation: {
      x: 3.141592502593994,
      y: 0,
      z: 3.141592502593994,
    },
  },
  {
    id: "end-rounded",
    position: {
      x: -1.0927847071684505e-8,
      y: -3.5000000874227775,
      z: -1.0000000109278508,
    },
    rotation: {
      x: 3.141592502593994,
      y: 0,
      z: 3.141592502593994,
    },
  },
  {
    id: "escalator",
    position: {
      x: -1.5893256488652865e-8,
      y: -3.8749999125772217,
      z: 1.9999999841067473,
    },
    rotation: {
      x: 1.5099580252808664e-7,
      y: 0,
      z: -1.5099580252808664e-7,
    },
  },
  {
    id: "escalator",
    position: {
      x: 5.960464477539089e-8,
      y: -3.3750000635730357,
      z: 3.0000000596046372,
    },
    rotation: {
      x: 1.5099580252808664e-7,
      y: 0,
      z: -1.5099580252808664e-7,
    },
  },
  {
    id: "escalator",
    position: {
      x: 1.3510254603943463e-7,
      y: -2.87500021456885,
      z: 4.000000135102527,
    },
    rotation: {
      x: 1.5099580252808664e-7,
      y: 0,
      z: -1.5099580252808664e-7,
    },
  },
  {
    id: "end",
    position: {
      x: 2.1060044730347838e-7,
      y: -2.375000365564664,
      z: 5.000000210600418,
    },
    rotation: {
      x: 1.5099580252808664e-7,
      y: 0,
      z: -1.5099580252808664e-7,
    },
  },
])
