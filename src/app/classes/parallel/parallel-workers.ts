export class ParallelWorkers {
  workers = [];
  workersBusy = [];
  numberOfWorkers;
  count = 0;
  t0;
  t1;
  data: any[];

  constructor(data: any[], numberOfWorkers: number) {
    this.data = data;
    this.numberOfWorkers = numberOfWorkers;
    this.setupWorkers();
  }

  private setupWorkers() {
    for (let i = 0; i < this.numberOfWorkers; i++) {
      this.workers.push(new Worker('src/app/parallel-workers/matrix-multiplying-worker.worker', {
        type: 'module'
      }));
      this.workers[i].onmessage = ({ data }) => {
        // console.log('From Web Worker ', i, ':', data.dataIndex, '/', this.data.length, " : ", data.result );
        this.workersBusy[i] = false;
        this.data[data.dataIndex] = data.result;
        if (this.count < this.data.length) {
          this.run()
        }
        if (data.dataIndex === this.data.length - 1) {
          this.t1 = performance.now();
          console.log('Parallel operation took ' + (this.t1 - this.t0) + " milliseconds.");
        }
      };
      this.workersBusy.push(false);
    }
  }

  private runWorker(workerNumber: number, data) {
    this.workers[workerNumber].postMessage(data);
  }

  run() {
    if (this.count === 0) {
      this.t0 = performance.now();
    }
    let index = this.workersBusy.findIndex((value) => value === false);
    if (index != -1) {
      this.workersBusy[index] = true;
      this.runWorker(index, { data: this.data[this.count], dataIndex: this.count});
      this.count++;
    }
    index = this.workersBusy.findIndex((value) => value === false);
    if (index != -1 && this.count < this.data.length) {
      this.run();
    }
  }
}

