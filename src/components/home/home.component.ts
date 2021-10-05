import { Component, OnInit } from '@angular/core';
import { Project } from 'src/components/home/project';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    projectList: Project[] = [
        {
            title: 'WebAssembly Performance',
            link: 'https://github.com/rgadams/wasm-primes',
            linkText: 'wasm-primes',
            description: 'A test of WebAssembly\'s performance, using Eratosthenes\' sieve in both Rust and JavaScript',
            route: 'webassembly/primes'
        },
        {
            title: 'WebAssembly Gravity',
            link: 'https://github.com/rgadams/gravity-wasm',
            linkText: 'wasm-gravity',
            description: 'This is a simulation of gravity, using WebAssembly and rust as a the engine for driving particle position, velocity, and acceleration',
            route: 'webassembly/gravity/one'
        },
        {
            title: 'WebAssembly Parallel Quick Sort',
            link: 'https://github.com/rgadams/wasm-parallel-quick-sort',
            linkText: 'wasm-parallel-quick-sort',
            description: 'Using WebAssembly to do parallelism in the web browser'
        },
        {
            title: 'WebAssembly Game of Life',
            link: 'https://github.com/rgadams/wasm-game-of-life',
            linkText: 'wasm-game-of-life',
            description: 'An implementation of Conway\'s game of life using WebAssembly/Rust',
            route: 'webassembly/life'
        },
        {
            title: 'Web Workers and Matrix Multiplication',
            link: 'https://github.com/rgadams/personal-website/tree/master/src/components/parallel-workers',
            linkText: 'Code',
            description: 'First attempt at using Web Workers to do parallel operations in the browser',
            route: 'parallel'
        },
        {
            title: '3D Graphics in HTML Canvas',
            link: 'https://github.com/rgadams/personal-website/tree/master/src/components/canvas-three-dimensions',
            linkText: 'Code',
            description: 'Using HTML5 Canvas to render the 3D Utah teapot in a 2D context',
            route: 'canvas'
        },
    ];

    ngOnInit(): void {
    }

}
