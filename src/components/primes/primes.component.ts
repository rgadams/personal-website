import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-primes',
    templateUrl: './primes.component.html',
    styleUrls: ['./primes.component.less']
})
export class PrimesComponent implements OnInit {
    wasm_primes: typeof import('src/assets/sieve-of-eratosthenes/wasm_prime_number_generator');
    numberOfPrimes = 1000;
    simulations = [];

    ngOnInit(): void {
        this.loadModule().then((module) => {
            this.wasm_primes = module;
        }).then(() => {
            this.runSimulation();
        })
    }

    async loadModule() {
        return await import('src/assets/sieve-of-eratosthenes/wasm_prime_number_generator');
    }

    runSimulation() {
        let t1 = performance.now();
        let p1 = this.wasm_primes.sieve_of_eratosthenes(this.numberOfPrimes);
        let t2 = performance.now();
        let p2 = this.sieve_of_eratosthenes(this.numberOfPrimes)
        let t3 = performance.now();

        const wasmTime = t2 - t1;
        const jsTime = t3 - t2;

        this.simulations.push({
            'numberOfPrimes': this.numberOfPrimes,
            'wasmTime': wasmTime,
            'jsTime': jsTime
        });
    }

    sieve_of_eratosthenes(max) {
        let sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    };
}

