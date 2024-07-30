import { Vector3 } from "three";

import { IBlocks } from "../types";
import { xNegVector, xVector, zNegVector, zVector } from "../constants/vector";
import End from "./End";
import Start from "./Start";
import Cylinder from "./Cylinder";
import RotatingCylinder from "./RotatingCylinder";
import SlantAPilar from "./SlantAPilar";
import SlantBPilar from "./SlantBPilar";
import SlantCPilar from "./SlantCPilar";
import SlantDPilar from "./SlantDPilar";
import StraightWidePilar from './StraightWidePilar';
import StraightWidePilars from './StraightWidePilars';
import CurveWidePilar from './CurveWidePilar';
import Escalator from './Escalator';

export const blocks: IBlocks = {
  "bend": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-0.5, 0.125, -0.5) },
      { dir: xNegVector, pos: new Vector3(-0.5, 0.125, 0.5) }
    ],
  },
  "bend-large": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, -2.5) },
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, 2.5) }
    ],
  },
  "bend-medium": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1, 0.125, -1.5) },
      { dir: xNegVector, pos: new Vector3(-1, 0.125, 1.5) }
    ],
  },
  "bump-a": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.125, 2) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -2) },
    ],
  },
  "bump-b": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.125, 2) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -2) },
    ],
  },
  "bump-c": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.125, 2) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -2) },
    ],
  },
  "bump-d": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.125, 2) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -2) },
    ],
  },
  "corner":  {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: xNegVector, pos: new Vector3(-0.5, 0.125, 0) }
    ],
  },
  "cross":  {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: xNegVector, pos: new Vector3(-0.5, 0.125, 0) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
      { dir: xVector, pos: new Vector3(0.5, 0.125, 0) },
    ],
  },
  "curve": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0.5, 0.125, -1) },
      { dir: xNegVector, pos: new Vector3(-1, 0.125, 0.5) }
    ],
  },
  "curve-large": {
    joints: [
      { dir: zNegVector, pos: new Vector3(1, 0.125, -1.5) },
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, 1) }
    ],
  },
  "curve-wide": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.85) },
      { dir: xNegVector, pos: new Vector3(-0.85, 0.125, 0) }
    ],
  },
  "curve-wide-large": {
    joints: [
      { dir: zNegVector, pos: new Vector3(1, 0.125, -1.85) },
      { dir: xNegVector, pos: new Vector3(-1.85, 0.125, 1) }
    ],
  },
  "curve-wide-medium": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0.5, 0.125, -1.35) },
      { dir: xNegVector, pos: new Vector3(-1.35, 0.125, 0.5) }
    ],
  },
  "curve-wide-pilar": {
    Component: CurveWidePilar,
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.85) },
      { dir: xNegVector, pos: new Vector3(-0.85, 0.125, 0) }
    ],
    models: ['curve-wide'],
    part: 'Cur Wid',
  },
  "cylinder": {
    Component: Cylinder,
    joints: [
      { dir: zNegVector, pos: new Vector3(2, 0.75, -0.75) },
      { dir: zVector, pos: new Vector3(2, 0.75, 0.75) },
      { dir: zNegVector, pos: new Vector3(0, -1, 0.5) },
      { dir: zVector, pos: new Vector3(0, -1, -0.5) },
      { dir: xNegVector, pos: new Vector3(0.5, -1, 0) },
      { dir: xVector, pos: new Vector3(-0.5, -1, 0) },
    ],
    models: [],
    part: 'Cyl',
  },
  "escalator": {
    Component: Escalator,
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.625, 0.5) },
    ],
    models: [],
    part: 'Esc',
  },
  "end": {
    Component: End,
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) }
    ],
    models: ["end-rounded", "banner-high"]
  },
  "funnel": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
  },
  "funnel-long": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 1.5) },
    ],
  },
  "helix-half-left": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1, 1.125, -1.5) },
      { dir: xNegVector, pos: new Vector3(-1, 0.125, 1.5) }
    ],
  },
  "helix-half-right": {
    joints: [
      { dir: xVector, pos: new Vector3(1, 1.125, -1.5) },
      { dir: xVector, pos: new Vector3(1, 0.125, 1.5) }
    ],
  },
  "helix-large-half-left": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1.5, 1.125, -2.5) },
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, 2.5) }
    ],
  },
  "helix-large-half-right": {
    joints: [
      { dir: xVector, pos: new Vector3(1.5, 1.125, -2.5) },
      { dir: xVector, pos: new Vector3(1.5, 0.125, 2.5) }
    ],
  },
  "helix-large-left": {
    joints: [
      { dir: xVector, pos: new Vector3(0, 2.125, 2.5) },
      { dir: xNegVector, pos: new Vector3(0, 0.125, 2.5) }
    ],
  },
  "helix-large-right": {
    joints: [
      { dir: xNegVector, pos: new Vector3(0, 2.125, 2.5) },
      { dir: xVector, pos: new Vector3(0, 0.125, 2.5) }
    ],
  },
  "helix-large-quarter-left": {
    joints: [
      { dir: zNegVector, pos: new Vector3(1, 0.625, -1.5) },
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, 1) }
    ],
  },
  "helix-large-quarter-right": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-1, 0.625, -1.5) },
      { dir: xVector, pos: new Vector3(1.5, 0.125, 1) }
    ],
  },
  "helix-left": {
    joints: [
      { dir: xVector, pos: new Vector3(0, 2.125, 1.5) },
      { dir: xNegVector, pos: new Vector3(0, 0.125, 1.5) }
    ],
  },
  "helix-right": {
    joints: [
      { dir: xNegVector, pos: new Vector3(0, 2.125, 1.5) },
      { dir: xVector, pos: new Vector3(0, 0.125, 1.5) }
    ],
  },
  "helix-quarter-left": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0.5, 0.625, -1) },
      { dir: xNegVector, pos: new Vector3(-1, 0.125, 0.5) }
    ],
  },
  "helix-quarter-right": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-0.5, 0.625, -1) },
      { dir: xVector, pos: new Vector3(1, 0.125, 0.5) }
    ],
  },
  "ramp-end-a": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.25, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-end-b": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.375, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-end-c": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-end-d": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.875, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-start-a": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.25, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-start-b": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.375, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-start-c": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-start-d": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.875, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "ramp-long-a": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.375, 1) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
    ],
  },
  "ramp-long-b": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.625, 1) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
    ],
  },
  "ramp-long-c": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.125, 1) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
    ],
  },
  "ramp-long-d": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.625, 1) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
    ],
  },
  "rotating-cylinder": {
    Component: RotatingCylinder,
    joints: [
      { dir: zNegVector, pos: new Vector3(2, 0.75, -0.75) },
      { dir: zVector, pos: new Vector3(2, 0.75, 0.75) },
      { dir: zNegVector, pos: new Vector3(0, -1, 0.5) },
      { dir: zVector, pos: new Vector3(0, -1, -0.5) },
      { dir: xNegVector, pos: new Vector3(0.5, -1, 0) },
      { dir: xVector, pos: new Vector3(-0.5, -1, 0) },
    ],
    models: [],
    part: 'Rot Cyl',
  },
  "s-curve-left": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-1.5, 0.125, -1.5) },
      { dir: zVector, pos: new Vector3(1.5, 0.125, 1.5) },
    ],
  },
  "s-curve-left-large": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-2.5, 0.125, -2.5) },
      { dir: zVector, pos: new Vector3(2.5, 0.125, 2.5) },
    ],
  },
  "s-curve-right": {
    joints: [
      { dir: zNegVector, pos: new Vector3(1.5, 0.125, -1.5) },
      { dir: zVector, pos: new Vector3(-1.5, 0.125, 1.5) },
    ],
  },
  "s-curve-right-large": {
    joints: [
      { dir: zNegVector, pos: new Vector3(2.5, 0.125, -2.5) },
      { dir: zVector, pos: new Vector3(-2.5, 0.125, 2.5) },
    ],
  },
  "slant-a": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.375, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "slant-a-pilar": {
    Component: SlantAPilar,
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.375, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
    models: ['slant-a'],
    part: 'Sl A'
  },
  "slant-b": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "slant-b-pilar": {
    Component: SlantBPilar,
    joints: [
      { dir: zVector, pos: new Vector3(0, 0.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
    models: ['slant-b'],
    part: 'Sl B'
  },
  "slant-c": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.125, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "slant-c-pilar": {
    Component: SlantCPilar,
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.125, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
    models: ['slant-c'],
    part: 'Sl C'
  },
  "slant-d": {
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
  },
  "slant-d-pilar": {
    Component: SlantDPilar,
    joints: [
      { dir: zVector, pos: new Vector3(0, 1.625, 0.5) },
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
    ],
    models: ['slant-d'],
    part: 'Sl D'
  },
  // "slant-long-a": {
  //   joints: [
  //     { dir: zVector, pos: new Vector3(0, 0.375, 1) },
  //     { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
  //   ],
  // },
  // "slant-long-b": {
  //   joints: [
  //     { dir: zVector, pos: new Vector3(0, 0.625, 1) },
  //     { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
  //   ],
  // },
  // "slant-long-c": {
  //   joints: [
  //     { dir: zVector, pos: new Vector3(0, 1.125, 1) },
  //     { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
  //   ],
  // },
  // "slant-long-d": {
  //   joints: [
  //     { dir: zVector, pos: new Vector3(0, 1.625, 1) },
  //     { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
  //   ],
  // },
  "split-double": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
      { dir: zVector, pos: new Vector3(1, 0.125, 1) },
      { dir: zVector, pos: new Vector3(-1, 0.125, 1) },
    ],
  },
  "split-double-sides": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -1) },
      { dir: xNegVector, pos: new Vector3(1.5, 0.125, 0.5) },
      { dir: xVector, pos: new Vector3(-1.5, 0.125, 0.5) },
    ],
  },
  "split-large-left": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, 1) },
      { dir: zNegVector, pos: new Vector3(1, 0.125, -1.5) },
      { dir: xVector, pos: new Vector3(1.5, 0.125, 1) },
    ],
  },
  "split-large-right": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1.5, 0.125, -1) },
      { dir: zVector, pos: new Vector3(1, 0.125, 1.5) },
      { dir: xVector, pos: new Vector3(1.5, 0.125, -1) },
    ],
  },
  "split-left": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1, 0.125, 0.5) },
      { dir: zNegVector, pos: new Vector3(0.5, 0.125, -1) },
      { dir: xVector, pos: new Vector3(1, 0.125, 0.5) },
    ],
  },
  "split-right": {
    joints: [
      { dir: xNegVector, pos: new Vector3(-1, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0.5, 0.125, 1) },
      { dir: xVector, pos: new Vector3(1, 0.125, -0.5) },
    ],
  },
  "start": {
    Component: Start,
    joints: [{ dir: zVector, pos: new Vector3(0, 0.125, 0.5) }],
    models: ["end-rounded"],
  },
  "straight": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
  },
  "straight-hole": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
  },
  "straight-wide": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
  },
  "straight-wide-pilar": {
    Component: StraightWidePilar,
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
    models: ['straight-wide'],
    part: 'Str Wid'
  },
  "straight-wide-pilars": {
    Component: StraightWidePilars,
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
    models: ['straight-wide'],
    part: 'Str Wid2'
  },
  "straight-wide-hole": {
    joints: [
      { dir: zNegVector, pos: new Vector3(0, 0.125, -0.5) },
      { dir: zVector, pos: new Vector3(0, 0.125, 0.5) },
    ],
  },
  "wave-a": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-0.125, 0.125, -2) },
      { dir: zVector, pos: new Vector3(-0.125, 0.125, 2) },
    ],
  },
  "wave-b": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-0.25, 0.125, -2) },
      { dir: zVector, pos: new Vector3(-0.25, 0.125, 2) },
    ],
  },
  "wave-c": {
    joints: [
      { dir: zNegVector, pos: new Vector3(-0.5, 0.125, -2) },
      { dir: zVector, pos: new Vector3(-0.5, 0.125, 2) },
    ],
  },
};
