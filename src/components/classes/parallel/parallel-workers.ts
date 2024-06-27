import { Matrix } from '../matrix';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class ParallelWorkers {
    workers: Worker[] = [];
    numberOfWorkers: number;
    count = 0;
    percentDone = 0;
    t0 = 0;
    t1 = 0;
    data: { leftMatrix: Matrix; rightMatrix: Matrix }[];

    monitor: Subject<number> = new Subject();

    constructor(data: { leftMatrix: Matrix; rightMatrix: Matrix }[], numberOfWorkers: number) {
        this.data = data;
        this.numberOfWorkers = numberOfWorkers;
        this.setupWorkers();
    }

    run(): Observable<number> {
        this.t0 = performance.now();

        const monitor$: Observable<number> = this.monitor.pipe(
            tap((index) => {
                this.runWorker(index, {
                    data: this.data[this.count],
                    dataIndex: this.count,
                });
                if (this.count % 1000 === 0) {
                    console.log(this.count, this.percentDone);
                }
                this.percentDone = (this.count / (this.data.length - 1)) * 100;
                this.count++;
            }),
            catchError((err) => {
                console.log(err);
                return of(null);
            })
        );

        // Initialize first batch of workers
        this.workers.forEach(() => {
            if (this.count !== this.data.length - 1) {
                this.runWorker(this.count, {
                    data: this.data[this.count],
                    dataIndex: this.count,
                });
            }
        });

        return monitor$;
    }

    terminate(): void {
        this.workers.forEach((worker) => {
            worker.terminate();
        });
    }

    private setupWorkers(): void {
        for (let i = 0; i < this.numberOfWorkers; i++) {
            this.workers.push(
                new Worker(
                    new URL('src/components/parallel-workers/matrix-multiplying-worker.worker', import.meta.url),
                    {
                        type: 'module',
                    }
                )
            );
            this.workers[i].onmessage = (event: MessageEvent) => {
                if (event.data.dataIndex !== this.data.length - 1) {
                    this.monitor.next(i);
                } else {
                    this.t1 = performance.now();
                    this.monitor.complete();
                }
            };
        }
    }

    private runWorker(workerNumber: number, data: unknown): void {
        this.workers[workerNumber].postMessage(data);
    }
}
