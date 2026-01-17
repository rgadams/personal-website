import { Component, NgZone, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Universe } from 'src/assets/game-of-life';

@Component({
    selector: 'app-game-of-life',
    imports: [FormsModule],
    templateUrl: './game-of-life.component.html',
    styleUrls: ['./game-of-life.component.less'],
})
export class GameOfLifeComponent implements OnInit {
    memory: Uint8Array;
    universeModule: typeof import('src/assets/game-of-life/wasm_game_of_life');
    universe: Universe;
    width: number;
    height: number;

    gridElements: WritableSignal<{
        id: string;
        row: number;
        column: number;
        className: string;
    }[]> = signal([]);

    playStatus = false;
    statusDisplay = 'Stopped';
    patternToGenerate: string;

    constructor(private ngZone: NgZone) {}

    getIndex(row, column) {
        return row * this.width + column;
    }

    async loadMemoryModule() {
        return await import('src/assets/game-of-life/wasm_game_of_life_bg.wasm');
    }

    async loadUniverseModule() {
        return await import('src/assets/game-of-life/wasm_game_of_life');
    }


    ngOnInit() {
        const promises = [];
        promises.push(this.loadMemoryModule());
        promises.push(this.loadUniverseModule());
        Promise.all(promises).then(([memoryModule, universeModule]) => {
            this.memory = memoryModule.memory;
            this.universeModule = universeModule;

            // Construct the universe, and get its width and height.
            this.universe = this.universeModule.Universe.new(64, 64);
            this.width = this.universe.width();
            this.height = this.universe.height();

            const cellsPtr = this.universe.cells();
            const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
            const gridElementsArray = [];

            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    gridElementsArray.push({
                        id: `row-${row}-column-${col}`,
                        row,
                        column: col,
                        className: cells[this.getIndex(row, col)] === 0 ? 'dead' : 'alive',
                    });
                }
            }
            this.gridElements.set(gridElementsArray);
        });
    }

    toggleCell(row, col) {
        console.log(`toggled: ${row}, ${col}`);
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        if (cells[this.getIndex(row, col)] === this.universeModule.Cell.Alive) {
            cells[this.getIndex(row, col)] = this.universeModule.Cell.Dead;
        } else {
            cells[this.getIndex(row, col)] = this.universeModule.Cell.Alive;
        }
        if (!this.playStatus) {
            this.drawCells();
        }
    }

    drawCells() {
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                const idx = this.getIndex(row, col);
                this.gridElements()[idx].className = cells[idx] === 0 ? 'dead' : 'alive';
            }
        }
    }

    randomizeCells() {
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (Math.floor(Math.random() * 2) === 0) {
                    cells[this.getIndex(row, col)] = this.universeModule.Cell.Dead;
                } else {
                    cells[this.getIndex(row, col)] = this.universeModule.Cell.Alive;
                }
            }
        }
        this.drawCells();
    }

    clearGrid() {
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                cells[this.getIndex(row, col)] = this.universeModule.Cell.Dead;
            }
        }
        this.drawCells();
    }

    renderLoop() {
        if (this.playStatus) {
            this.universe.tick();
            this.drawCells();

            requestAnimationFrame(() => this.renderLoop());
        }
    }

    togglePlay() {
        this.playStatus = !this.playStatus;
        if (!this.playStatus) {
            this.statusDisplay = 'Stopped';
        } else {
            this.statusDisplay = 'Started';
            requestAnimationFrame(() => this.renderLoop());
        }
    }

    generatePattern() {
        if (this.patternToGenerate === 'gosper-glider-gun') {
            this.drawGosperGliderGun();
        } else if (this.patternToGenerate === 'hammerhead') {
            this.drawHammerhead();
        } else {
            console.log('no pattern selected');
        }
    }

    drawGosperGliderGun() {
        this.clearGrid();
        const gliderGunCells = [
            [1, 6],
            [2, 6],
            [1, 7],
            [2, 7],
            [13, 4],
            [14, 4],
            [12, 5],
            [11, 6],
            [11, 7],
            [11, 8],
            [12, 9],
            [13, 10],
            [14, 10],
            [15, 7],
            [16, 5],
            [17, 6],
            [17, 7],
            [17, 8],
            [16, 9],
            [18, 7],
            [21, 4],
            [21, 5],
            [21, 6],
            [22, 4],
            [22, 5],
            [22, 6],
            [23, 3],
            [23, 7],
            [25, 2],
            [25, 3],
            [25, 7],
            [25, 8],
            [35, 4],
            [35, 5],
            [36, 4],
            [36, 5],
        ];
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        gliderGunCells.forEach((cell) => {
            cells[this.getIndex(cell[1], cell[0])] = this.universeModule.Cell.Alive;
        });
        this.drawCells();
    }

    drawHammerhead() {
        this.clearGrid();
        const hammerheadCells = [
            [10, 9],
            [11, 9],
            [9, 10],
            [10, 10],
            [12, 10],
            [13, 10],
            [14, 10],
            [10, 11],
            [11, 11],
            [12, 11],
            [13, 11],
            [14, 11],
            [11, 12],
            [12, 12],
            [13, 12],
            [14, 12],
            [15, 12],
            [15, 13],
            [16, 13],
            [17, 13],
            [15, 14],
            [16, 14],
            [17, 14],
            [15, 15],
            [16, 15],
            [17, 15],
            [15, 18],
            [16, 18],
            [17, 18],
            [15, 19],
            [16, 19],
            [17, 19],
            [15, 20],
            [16, 20],
            [17, 20],
            [11, 21],
            [12, 21],
            [13, 21],
            [14, 21],
            [15, 21],
            [10, 22],
            [11, 22],
            [12, 22],
            [13, 22],
            [14, 22],
            [10, 24],
            [11, 24],
            [9, 23],
            [10, 23],
            [12, 23],
            [13, 23],
            [14, 23],

            [19, 13],
            [19, 15],
            [20, 15],
            [21, 15],
            [19, 16],
            [20, 16],
            [19, 17],
            [20, 17],
            [19, 18],
            [20, 18],
            [21, 18],
            [19, 20],
            [21, 12],
            [21, 13],
            [22, 13],
            [22, 14],
            [21, 20],
            [21, 21],
            [22, 20],
            [22, 19],
            [23, 12],
            [24, 12],
            [25, 12],
            [26, 12],
            [27, 11],
            [27, 9],
            [25, 8],
            [23, 9],
            [22, 10],
            [22, 11],
            [23, 21],
            [24, 21],
            [25, 21],
            [26, 21],
            [27, 22],
            [27, 24],
            [25, 25],
            [23, 24],
            [22, 23],
            [22, 22],
        ];
        const cellsPtr = this.universe.cells();
        const cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);
        hammerheadCells.forEach((cell) => {
            cells[this.getIndex(cell[1], cell[0])] = this.universeModule.Cell.Alive;
        });
        this.drawCells();
    }
}
