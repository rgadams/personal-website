import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Object3D } from 'src/components/classes/object3-d';
import { Face } from 'src/components/classes/interfaces';
import { Camera } from '../classes/camera';
import { Matrix } from '../classes/matrix';
import { Vector } from '../classes/vector';

@Component({
  selector: 'app-canvas-three-dimensions',
  templateUrl: './canvas-three-dimensions.component.html',
  styleUrls: ['./canvas-three-dimensions.component.less']
})
export class CanvasThreeDimensionsComponent implements OnInit {
  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
  currentObject: Object3D;
  camera: Camera;
  cameraOn = false;
  light = new Vector(1, 3, -5);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.c = document.getElementById('canvas-three-dimensions') as HTMLCanvasElement;
    this.ctx = this.c.getContext('2d') as CanvasRenderingContext2D;
    this.canvasSize = Math.min(window.innerWidth, window.innerHeight);
    this.ctx.canvas.width  = this.canvasSize;
    this.ctx.canvas.height = this.canvasSize;
    this.camera = new Camera(new Vector(0, 1, -5), new Vector(0, 0, 0));
    this.readObjectFile('assets/test-objects/teapot.obj');
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.c.width, this.c.height);
      this.render();
    }, 5);
  }

  readObjectFile(filepath: string): void {
    this.currentObject = new Object3D([], []);
    this.http.get(filepath, {responseType: 'text'}).subscribe((response) => {
      const lines = response.split('\n');
      lines.forEach((line) => {
        const lineParts = line.split(' ');
        switch (lineParts[0]) {
          case 'v':
            const vertices = new Vector(parseFloat(lineParts[1]), parseFloat(lineParts[2]), parseFloat(lineParts[3]));
            this.currentObject.vertices.push(vertices);
            break;
          case 'f':
            const faces = [ parseInt(lineParts[1], 10), parseInt(lineParts[2], 10), parseInt(lineParts[3], 10) ];
            this.currentObject.faces.push(faces);
            break;
          default:
            // Either a comment or empty line
        }
      });
    });
  }

  render(): void {
    const sceneRotation = {
      x: 0,
      y: 0.01,
      z: 0
    };
    this.currentObject.rotateObject(sceneRotation);
    const displayObject = this.currentObject.getDisplayOrientation();
    displayObject.faces.sort((f1, f2) => {
      return (displayObject.vertices[f2[0] - 1].vector[2]
              + displayObject.vertices[f2[1] - 1].vector[2]
              + displayObject.vertices[f2[2] - 1].vector[2])
          - (displayObject.vertices[f1[0] - 1].vector[2]
              + displayObject.vertices[f1[1] - 1].vector[2]
              + displayObject.vertices[f1[2] - 1].vector[2]);
    });
    const faces = [] as Face[];
    displayObject.faces.forEach((f) => {
      const currentFace = {
        vertex1: displayObject.vertices[f[0] - 1],
        vertex2: displayObject.vertices[f[1] - 1],
        vertex3: displayObject.vertices[f[2] - 1],
        shading: 0
      } as Face;
      const shading = this.getFaceShading(currentFace);
      if (Vector.dotProduct(this.getFaceNormal(currentFace), this.camera.getOrientation()) < 0.01) {
        faces.push({
          vertex1: this.translateObjectCoordinatesToScreenCoordinates(displayObject.vertices[f[0] - 1], this.cameraOn),
          vertex2: this.translateObjectCoordinatesToScreenCoordinates(displayObject.vertices[f[1] - 1], this.cameraOn),
          vertex3: this.translateObjectCoordinatesToScreenCoordinates(displayObject.vertices[f[2] - 1], this.cameraOn),
          shading
        } as Face);
      }
    });
    faces.forEach((face) => {
      this.drawTriangle(face);
    });
  }

  translateObjectCoordinatesToScreenCoordinates(vertex: Vector, camera = false): Vector {
    let vertexClone = vertex.getClone();
    if (camera) {
      let vertexMatrix = new Matrix([[vertex.vector[0]], [vertex.vector[1]], [vertex.vector[2]], [1]]);
      const translationMatrix = Matrix.createBlankSquareMatrixFromDimensions(4, true);
      for (let i = 0; i < 3; i++) {
        translationMatrix.matrix[i][3] = this.camera.position.vector[i];
      }
      vertexMatrix = translationMatrix.inverse().multiply(vertexMatrix);
      const distance = Vector.fromTwoPoints(vertexClone, this.camera.position).getMagnitude();
      const perspectiveProjectionMatrix = Matrix.createBlankSquareMatrixFromDimensions(4, true);
      perspectiveProjectionMatrix.matrix[3][3] = 0;
      perspectiveProjectionMatrix.matrix[3][2] = 1 / distance;
      const transformedVertex = Vector.fromArray(perspectiveProjectionMatrix.multiply(vertexMatrix).transpose().matrix[0]);
      vertexClone = new Vector(
          transformedVertex.vector[0] / transformedVertex.vector[3],
          transformedVertex.vector[1] / transformedVertex.vector[3],
          transformedVertex.vector[2] / transformedVertex.vector[3]);
    }
    const newX = this.canvasSize / 2 * vertexClone.vector[0] / 4 + this.canvasSize / 2;
    const newY = this.canvasSize / 2 * vertexClone.vector[1] / -4 + this.canvasSize / 1.5;
    const newZ = 0;
    return new Vector(newX, newY, newZ);
  }

  drawTriangle(face: Face): void {
    this.ctx.beginPath();
    this.ctx.moveTo(face.vertex1.vector[0], face.vertex1.vector[1]);
    this.ctx.lineTo(face.vertex2.vector[0], face.vertex2.vector[1]);
    this.ctx.lineTo(face.vertex3.vector[0], face.vertex3.vector[1]);
    this.ctx.lineTo(face.vertex1.vector[0], face.vertex1.vector[1]);
    const shade = face.shading * 255;
    this.ctx.strokeStyle = 'rgb(' + shade + ',' + shade + ',' + shade + ')';
    this.ctx.stroke();
    this.ctx.fillStyle = 'rgb(' + shade + ',' + shade + ',' + shade + ')';
    this.ctx.fill();
  }

  getFaceNormal(face: Face): Vector {
    const vec1 = Vector.fromTwoPoints(face.vertex1, face.vertex2);
    const vec2 = Vector.fromTwoPoints(face.vertex1, face.vertex3);
    return Vector.crossProduct(vec2, vec1);
  }

  getFaceShading(face: Face): number {
    let shading = 0;
    const faceNormal = this.getFaceNormal(face).toUnitVector();
    const lightVec1 = Vector.fromTwoPoints(face.vertex1, this.light).toUnitVector();
    shading += Math.abs(Vector.dotProduct(faceNormal, lightVec1));
    const lightVec2 = Vector.fromTwoPoints(face.vertex2, this.light).toUnitVector();
    shading += Math.abs(Vector.dotProduct(faceNormal, lightVec2));
    const lightVec3 = Vector.fromTwoPoints(face.vertex3, this.light).toUnitVector();
    shading += Math.abs(Vector.dotProduct(faceNormal, lightVec3));
    return shading / 3;
  }
}
