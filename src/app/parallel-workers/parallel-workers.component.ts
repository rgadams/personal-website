import { Component, OnInit } from '@angular/core';
import {ParallelWorkers} from 'src/app/classes/parallel/parallel-workers';
import {Matrix} from '../classes/matrix';

@Component({
  selector: 'app-parallel-workers',
  templateUrl: './parallel-workers.component.html',
  styleUrls: ['./parallel-workers.component.less']
})
export class ParallelWorkersComponent implements OnInit {

  numberOfWorkers = 4;
  arrayLength = 2000;
  parallelWorkers: ParallelWorkers;
  array = [];
  expectedArray = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.arrayLength; i++) {
      const leftMatrix = Matrix.createBlankSquareMatrixFromDimensions(10, false);
      const rightMatrix = Matrix.createBlankSquareMatrixFromDimensions(10, false);
      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
          leftMatrix.matrix[j][k] = Math.floor(Math.random() * 10);
          rightMatrix.matrix[j][k] = Math.floor(Math.random() * 10);
        }
      }
      this.array.push({
        leftMatrix: leftMatrix,
        rightMatrix: rightMatrix
      });
    }
    this.expectedArray = Array.from(this.array.map((data) => {
      return data.leftMatrix.multiply(data.rightMatrix);
    }));
    this.parallelWorkers = new ParallelWorkers(this.array, this.numberOfWorkers);
  }

  runCountInParallel() {
    this.parallelWorkers.run();
  }

  logMatrices(index: number) {
    let expMatix = this.expectedArray[index];
    console.log('Expected Matrix: ', expMatix);
    let actualMatrix = this.array[index];
    console.log('Actual Matrix: ', actualMatrix);
  }

  compareObjects(expected, actual) {
    return JSON.stringify(expected) === JSON.stringify((actual));
  }
}
