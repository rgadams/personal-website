import { Component, KeyValueDiffer, KeyValueChanges, KeyValueDiffers, OnInit } from '@angular/core';
import { ParallelWorkers } from 'src/components/classes/parallel/parallel-workers';
import { Matrix } from '../classes/matrix';

@Component({
  selector: 'app-parallel-workers',
  templateUrl: './parallel-workers.component.html',
  styleUrls: ['./parallel-workers.component.less']
})
export class ParallelWorkersComponent implements OnInit {
  doneLoading = false;
  numberOfWorkers = 1;
  arrayLength = 5000;
  parallelWorkers: ParallelWorkers;
  array = [];
  expectedArray = [];
  runHistory = [];
  workersDiffer: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.setup();
    this.workersDiffer = this.differs.find(this.parallelWorkers).create();
    this.doneLoading = true;
    this.parallelWorkers.run();
  }

  runCountInParallel() {
    this.reset();
    this.setup();
    this.parallelWorkers.run();
  }

  setup() {
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

  reset() {
    this.array = [];
    this.parallelWorkers.terminate();
  }

  parallelWorkersChanged(changes: KeyValueChanges<string, any>) {
    changes.forEachAddedItem((changedItem) => {
      if (changedItem.key == 't1') {
        this.runHistory.push({
          workers: this.numberOfWorkers,
          size: this.arrayLength,
          time: this.parallelWorkers.t1 - this.parallelWorkers.t0
        });
      }
    })
  }

  ngDoCheck(): void {
    const changes = this.workersDiffer.diff(this.parallelWorkers);
    if (changes) {
      this.parallelWorkersChanged(changes);
    }
  }
}
