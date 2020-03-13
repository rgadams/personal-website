import {Vector} from './vector';

export interface Face {
  vertex1: Vector,
  vertex2: Vector,
  vertex3: Vector,
  shading: number
}

export interface Rotation {
  x: number,
  y: number,
  z: number
}
