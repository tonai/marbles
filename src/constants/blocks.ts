import { ILevel } from "../types";
import { deserializeLevel } from "../helpers/level";

export const cylinderLowRadius = 0.25;
export const cylinderHighRadius = 2.5;
export const cylinderHeight = 1;

export const pilarRadius = 0.125;
export const pilarHeight = 0.5;

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
  Straights: ["straight", "straight-hole", "end"],
  Wides: ["funnel", "funnel-long", "straight-wide", "straight-wide-hole", "curve-wide", "curve-wide-medium", "curve-wide-large"],
  Dynamics: ["rotating-cylinder", "escalator"],
  OtherWides: ["straight-wide-pilar", "straight-wide-pilars", "curve-wide-pilar"],
  Others: ["cylinder", "slant-a-pilar", "slant-b-pilar", "slant-c-pilar", "slant-d-pilar"],
};
export const ballModel = "marble-low";

export const defaultParts: Record<string, number> = Object.fromEntries(
  Object.values(partMenu)
    .flat()
    .map((id) => [id, Infinity]),
);

// export const defaultLevel: ILevel = [
//   { id: "start" },
//   {
//     id: "helix-left",
//     position: new Vector3(-1.5000000513428144, -2, 0.5000000513428144),
//     rotation: new Euler(0, Math.PI / 2, 0),
//   },
//   {
//     id: "end",
//     position: new Vector3(-1.0268562711246432e-7, -2, 1.0000001026856271),
//     rotation: new Euler(-0, 0, -0),
//   },
// ];

export const defaultLevel: ILevel = deserializeLevel([
  {
    "id": "start"
  },
  {
    "id": "ramp-long-a",
    "position": {
      "x": 0,
      "y": -0.25,
      "z": 1.5
    },
    "rotation": {
      "x": -3.1415927410125732,
      "y": 0,
      "z": -3.1415927410125732
    }
  },
  {
    "id": "escalator",
    "position": {
      "x": -2.1855694143369007e-8,
      "y": -0.2499999562886117,
      "z": 2.9999999781443076
    },
    "rotation": {
      "x": 8.742277657347586e-8,
      "y": 0,
      "z": -8.742277657347586e-8
    }
  },
  {
    "id": "ramp-long-a",
    "position": {
      "x": 6.556708243010703e-8,
      "y": 8.742277457507441e-8,
      "z": 4.500000065567086
    },
    "rotation": {
      "x": 3.141592502593994,
      "y": 0,
      "z": 3.141592502593994
    }
  },
  {
    "id": "end",
    "position": {
      "x": 2.781813179808515e-8,
      "y": 1.6292067583911773e-7,
      "z": 6.000000027818142
    },
    "rotation": {
      "x": 1.5099580252808664e-7,
      "y": 0,
      "z": -1.5099580252808664e-7
    }
  }
]);
