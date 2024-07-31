import { ILevel } from "../types";
import { deserializeLevel } from "../helpers/level";

export const cylinderLowRadius = 0.25;
export const cylinderHighRadius = 2.5;
export const cylinderHeight = 1;

export const pilarRadius = 0.125;
export const pilarHeight = 0.5;

export const pachinkoHeight = 2;
export const pachinkoWidth = 3;
export const pachinkoDepth = 1;
export const twoThird = 2 / 3;

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
};
export const ballModel = "marble-low";

export const defaultParts: Record<string, number> = Object.fromEntries(
  Object.values(partMenu)
    .flat()
    .map((id) => [id, Infinity]),
);

export const defaultLevel: ILevel = deserializeLevel([
  {
    "id": "pachinko"
  },
  {
    "id": "pachinko-end",
    "position": {
      "x": 0,
      "y": -2,
      "z": 0
    },
    "rotation": {
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
  {
    "id": "ramp-long-b",
    "position": {
      "x": 0,
      "y": -4,
      "z": 0.5
    },
    "rotation": {
      "x": -3.1415927410125732,
      "y": 0,
      "z": -3.1415927410125732
    }
  },
  {
    "id": "end-rounded",
    "position": {
      "x": -4.3711388286738015e-8,
      "y": -3.500000131134169,
      "z": -1.000000043711394
    },
    "rotation": {
      "x": 3.141592502593994,
      "y": 0,
      "z": 3.141592502593994
    }
  },
  {
    "id": "ramp-long-d",
    "position": {
      "x": 1.3113416486021402e-7,
      "y": -5.499999825154435,
      "z": 2.5000001311341724
    },
    "rotation": {
      "x": 3.141592502593994,
      "y": 0,
      "z": 3.141592502593994
    }
  },
  {
    "id": "bump-b",
    "position": {
      "x": 1.3113416486021402e-7,
      "y": -5.499999372167028,
      "z": 5.5000001311342075
    },
    "rotation": {
      "x": 3.141592502593994,
      "y": 0,
      "z": 3.141592502593994
    }
  },
  {
    "id": "split-double",
    "position": {
      "x": 9.338521422819215e-8,
      "y": -5.499999221171225,
      "z": 8.50000009338527
    },
    "rotation": {
      "x": 1.5099580252808664e-7,
      "y": 0,
      "z": -1.5099580252808664e-7
    }
  },
  {
    "id": "helix-left",
    "position": {
      "x": -2.5000002599492044,
      "y": -7.499998994677467,
      "z": 9.500000484468679
    },
    "rotation": {
      "x": -1.5099580252808664e-7,
      "y": 1.5707963705062866,
      "z": 0
    }
  },
  {
    "id": "helix-right",
    "position": {
      "x": 2.5000004844685835,
      "y": -7.499999296669073,
      "z": 9.49999984273645
    },
    "rotation": {
      "x": 1.5099580252808664e-7,
      "y": -1.5707963705062866,
      "z": 0
    }
  },
  {
    "id": "split-double",
    "position": {
      "x": -2.9241753307651663e-7,
      "y": -7.499998843681665,
      "z": 10.500000516937018
    },
    "rotation": {
      "x": -3.1415927410125732,
      "y": 0,
      "z": 3.141592502593994
    }
  },
  {
    "id": "end",
    "position": {
      "x": -3.301664837085384e-7,
      "y": -7.499998799970276,
      "z": 12.000000495081332
    },
    "rotation": {
      "x": 8.742277657347586e-8,
      "y": 0,
      "z": -1.5099580252808664e-7
    }
  }
]);
