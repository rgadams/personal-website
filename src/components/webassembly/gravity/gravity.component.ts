import { Component, OnInit } from '@angular/core';
import { Universe } from 'src/assets/wasm-gravity';
import { memory } from 'src/assets/wasm-gravity/gravity_wasm_bg.wasm';

@Component({
    selector: 'app-gravity',
    templateUrl: './gravity.component.html',
    styleUrls: ['./gravity.component.less']
})
export class GravityComponent implements OnInit {
    universe: Universe;
    canvas: HTMLCanvasElement;
    colors: string[] = [];
    numberOfElements = 1000;
    ctx;

    ngOnInit(): void {
        this.universe = Universe.new();
        this.canvas = document.getElementById('gravity-canvas-one') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        for (let i = 0; i < this.numberOfElements; i++) {
            this.colors.push('#' + Math.floor((Math.random() * 0.5 + 0.5) * 16777215).toString(16));
        }
        setInterval(() => {
            this.universe.tick();
            this.render();
        }, 10);
    }

    render() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const rawPositions = new Float64Array(memory.buffer,
            this.universe.get_positions_ptr(),
            this.numberOfElements * 3);
        const masses = new Float64Array(memory.buffer,
            this.universe.get_masses_ptr(),
            this.numberOfElements);
        const positions = [];
        for (let i = 0; i < this.numberOfElements; i++) {
            const particle = Array.from(rawPositions.slice(i, i + 3));
            positions.push(particle);
            this.ctx.fillStyle = this.colors[i];
            this.ctx.fillRect(particle[0] * this.canvas.width / 4 + this.canvas.width / 2,
                particle[1] * this.canvas.height / 4 + this.canvas.height / 2, (masses[i] / 1.0) * 10, (masses[i] / 1.0) * 10);
        }
    }
}
