export class ParallelWorkers {
    workers: Worker[] = [];
    workersBusy: boolean[] = [];
    numberOfWorkers: number;
    count = 0;
    t0 = 0;
    t1 = 0;
    data: any[];

    constructor(data: any[], numberOfWorkers: number) {
        this.data = data;
        this.numberOfWorkers = numberOfWorkers;
        this.setupWorkers();
    }

    private setupWorkers(): void {
        for (let i = 0; i < this.numberOfWorkers; i++) {
            this.workers.push(new Worker(new URL('src/components/parallel-workers/matrix-multiplying-worker.worker', import .meta.url), {
                type: 'module'
            }));
            this.workers[i].onmessage = ({ data }) => {
                this.workersBusy[i] = false;
                this.data[data.dataIndex] = data.result;
                if (this.count < this.data.length) {
                    this.run();
                }
                if (data.dataIndex === this.data.length - 1) {
                    this.t1 = performance.now();
                    console.log('Parallel operation took ' + (this.t1 - this.t0) + ' milliseconds.');
                }
            };
            this.workersBusy.push(false);
        }
    }

    private runWorker(workerNumber: number, data: unknown): void {
        this.workers[workerNumber].postMessage(data);
    }

    run(): void {
        if (this.count === 0) {
            this.t0 = performance.now();
        }
        let index = this.workersBusy.findIndex((value) => !value);
        if (index !== -1) {
            this.workersBusy[index] = true;
            this.runWorker(index, { data: this.data[this.count], dataIndex: this.count });
            this.count++;
        }
        index = this.workersBusy.findIndex((value) => !value);
        if (index !== -1 && this.count < this.data.length) {
            this.run();
        }
    }

    terminate(): void {
        this.workers.forEach((worker) => {
            worker.terminate();
        });
    }
}

