import { Matrix } from './matrix';
import { Rotation } from './interfaces';
import { Vector } from './vector';

export class Object3D {
    vertices: Vector[];
    faces: number[][];
    rotationMatrix: Matrix;

    constructor(vertices: Vector[], faces: number[][], rotation = { x: 0, y: 0, z: 0 } as Rotation) {
        this.vertices = vertices;
        this.faces = faces;
        this.rotationMatrix = Object3D.createRotationMatrix(rotation);
    }

    static createRotationMatrix(rotation: Rotation): Matrix {
        const rotationMatrixForX = new Matrix(
            [[1, 0, 0],
                [0, Math.cos(rotation.x), -1 * Math.sin(rotation.x)],
                [0, Math.sin(rotation.x), Math.cos(rotation.x)]]
        );
        const rotationMatrixForY = new Matrix(
            [[Math.cos(rotation.y), 0, Math.sin(rotation.y)],
                [0, 1, 0],
                [-1 * Math.sin(rotation.y), 0, Math.cos(rotation.y)]]
        );
        const rotationMatrixForZ = new Matrix(
            [[Math.cos(rotation.z), -1 * Math.sin(rotation.z), 0],
                [Math.sin(rotation.z), Math.cos(rotation.z), 0],
                [0, 0, 1]]
        );
        return rotationMatrixForX.multiply(rotationMatrixForY).multiply(rotationMatrixForZ);
    }

    newObjectWithRotation(rotationMatrix: Matrix): Object3D {
        const newObject = structuredClone(this) as Object3D;
        newObject.vertices = newObject.vertices.map((vertex) => {
            const rotatedVertex = vertex.toMatrix().multiply(rotationMatrix);
            return Vector.fromArray(rotatedVertex.matrix[0]);
        });
        return newObject;
    }

    rotateObject(rotation: Rotation): void {
        this.rotationMatrix = this.rotationMatrix.multiply(Object3D.createRotationMatrix(rotation));
    }

    getDisplayOrientation(): Object3D {
        return this.newObjectWithRotation(this.rotationMatrix);
    }
}
