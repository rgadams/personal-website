import { Vector } from './vector';

export class Camera {
    position: Vector;
    pointingAt: Vector;

    constructor(position: Vector, pointingAt: Vector) {
        this.position = position;
        this.pointingAt = pointingAt;
    }

    getOrientation() {
        const orientationVector = new Vector(this.position.vector[0] - this.pointingAt.vector[0],
            this.position.vector[1] - this.pointingAt.vector[1],
            this.position.vector[2] - this.pointingAt.vector[2]);
        const vectorLength = Math.sqrt(Math.pow(orientationVector.vector[0], 2)
            + Math.pow(orientationVector.vector[1], 2)
            + Math.pow(orientationVector.vector[1], 2));
        return new Vector(orientationVector.vector[0] / vectorLength,
            orientationVector.vector[1] / vectorLength,
            orientationVector.vector[2] / vectorLength);
    }

    getPosition() {
        return this.position;
    }
}
