import { Component, OnInit } from '@angular/core';
import { ParallelWorkers } from 'src/components/classes/parallel/parallel-workers';
import { Matrix } from '../classes/matrix';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-parallel-workers',
    templateUrl: './parallel-workers.component.html',
    styleUrls: ['./parallel-workers.component.less'],
})
export class ParallelWorkersComponent implements OnInit {
    numberOfWorkers = 1;
    arrayLength = 5000;
    parallelWorkers: ParallelWorkers;
    array: { leftMatrix: Matrix; rightMatrix: Matrix }[] = [];
    runHistory = [];

    ngOnInit() {
        this.setup();
    }

    runCountInParallel() {
        this.reset();
        this.setup();
        console.log(this.parallelWorkers.t0);
        this.parallelWorkers
            .run()
            .pipe(
                finalize(() =>
                    this.runHistory.push({
                        workers: this.numberOfWorkers,
                        size: this.arrayLength,
                        time: this.parallelWorkers.t1 - this.parallelWorkers.t0,
                    })
                )
            )
            .subscribe();
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
                leftMatrix,
                rightMatrix,
            });
        }
        this.parallelWorkers = new ParallelWorkers(this.array, this.numberOfWorkers);
        console.log(this.parallelWorkers);
    }

    reset() {
        this.array = [];
        delete this.parallelWorkers;
    }
}
