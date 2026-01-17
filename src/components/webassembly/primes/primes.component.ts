import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-primes',
    imports: [FormsModule, DecimalPipe],
    templateUrl: './primes.component.html',
    styleUrls: ['./primes.component.less'],
})
export class PrimesComponent implements OnInit {
    wasmPrimes: typeof import('src/assets/sieve-of-eratosthenes/wasm_prime_number_generator');
    numberOfPrimes = 1000;
    simulations: {
        numberOfPrimes: number;
        wasmTime: number;
        jsTime: number;
    }[] = [];

    ngOnInit(): void {
        this.loadModule()
            .then((module) => {
                this.wasmPrimes = module;
            })
            .then(() => {
                this.runSimulation();
            });
    }

    async loadModule() {
        return await import('src/assets/sieve-of-eratosthenes/wasm_prime_number_generator');
    }

    runSimulation() {
        const t1 = performance.now();
        this.wasmPrimes.sieve_of_eratosthenes(this.numberOfPrimes);
        const t2 = performance.now();
        this.sieve_of_eratosthenes(this.numberOfPrimes);
        const t3 = performance.now();

        const wasmTime = t2 - t1;
        const jsTime = t3 - t2;

        this.simulations.push({
            numberOfPrimes: this.numberOfPrimes,
            wasmTime,
            jsTime,
        });
    }

    clearRuns() {
        this.simulations = [];
    }

    sieve_of_eratosthenes(max) {
        const sieve = [];
        const primes = [];
        let i;
        let j;
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }
}
