import { Matrix } from './matrix';

export class Vector {
    vector: number[];

    constructor(...numbers: number[]) {
        this.vector = numbers;
    }

    static fromArray(vector: number[]): Vector {
        const newVector = new Vector();
        vector.forEach(item => {
            newVector.vector.push(item);
        });
        return newVector;
    }

    static fromTwoPoints(point1: Vector, point2: Vector): Vector {
        if (point1.getLength() !== point2.getLength()) {
            throw new Error('Can\'t find vector from points of different dimensions');
        }
        const newVector = new Vector();
        for (let i = 0; i < point1.getLength(); i++) {
            newVector.vector.push(point2.vector[i] - point1.vector[i]);
        }
        return newVector;
    }

    static dotProduct(vec1: Vector, vec2: Vector): number {
        if (vec1.getLength() !== vec2.getLength()) {
            throw new Error('Can\'t dot product two vectors of different lengths');
        }
        let sum = 0;
        for (let i = 0; i < vec1.getLength(); i++) {
            sum += vec1.vector[i] * vec2.vector[i];
        }
        return sum;
    }

    static crossProduct(vec1: Vector, vec2: Vector): Vector {
        return new Vector(
            vec1.vector[1] * vec2.vector[2] - vec1.vector[2] * vec2.vector[1],
            vec1.vector[2] * vec2.vector[0] - vec1.vector[0] * vec2.vector[2],
            vec1.vector[0] * vec2.vector[1] - vec1.vector[1] * vec2.vector[0],
        );
    }

    getLength(): number {
        return this.vector.length;
    }

    getMagnitude(): number {
        let sum = 0;
        for (let i = 0; i < this.getLength(); i++) {
            sum += Math.pow(this.vector[i], 2);
        }
        return Math.sqrt(sum);
    }

    toUnitVector(): Vector {
        const magnitude = this.getMagnitude();
        const unitVector = [];
        for (let i = 0; i < this.getLength(); i++) {
            unitVector.push(this.vector[i] / magnitude);
        }
        return Vector.fromArray(unitVector);
    }

    toMatrix() {
        return new Matrix([this.vector]);
    }

    toArray() {
        return this.vector;
    }

    getClone() {
        return Vector.fromArray(Array.from(this.vector));
    }
}
