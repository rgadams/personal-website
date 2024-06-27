import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-square-game',
    templateUrl: './square-game.component.html',
    styleUrls: ['./square-game.component.less'],
})
export class SquareGameComponent implements OnInit {
    grid: number[] = [];
    dances: number[] = [];
    error: string;
    gameOver = false;

    ngOnInit(): void {
        // Create array of numbers 1-16, then shuffle the order
        for (let i = 1; i < 17; i++) {
            this.grid.push(i);
            if (Math.floor((i - 1) / 4) % 2 === 0 && (i % 2 === 0) || i % 2 !== 0) {
                if (i % 2 === 0) {
                    this.dances.push(1);
                } else {
                    this.dances.push(2);
                }
            }
        }
        this.shuffleArray(this.grid);
        const openIndex = this.grid.findIndex((value) => value === 16);
        const numberOfInversions = this.getNumberOfInversions();
        if (Math.floor(openIndex / 4) % 2 === 0 && numberOfInversions % 2 !== 1) {
            this.grid[openIndex] = this.grid[15];
            this.grid[15] = 16;
        } else if (Math.floor(openIndex / 4) % 2 === 1 && numberOfInversions % 2 !== 0) {
            this.grid[openIndex] = this.grid[11];
            this.grid[11] = 16;
        }
    }

    makeMove(index: number): void {
        if (this.gameOver) {
            return;
        }
        const openIndex = this.grid.findIndex((value) => value === 16);

        if (this.isValidMoveV2(index, openIndex)) {
            const moves = this.getMoves(index, openIndex);
            moves.indicesToMove.forEach((indice) => {
                document.getElementById(indice.toString(10)).setAttribute('moveDirection', moves.direction);
            });
            delete this.error;
            setTimeout(() => {
                const gridCopy = JSON.parse(JSON.stringify(this.grid));
                moves.indicesToMove.forEach((indice, i) => {
                    document.getElementById(indice.toString(10)).removeAttribute('moveDirection');
                    if (i !== 0) {
                        this.grid[indice] = gridCopy[moves.indicesToMove[i - 1]];
                    }
                });
                this.grid[openIndex] = gridCopy[moves.indicesToMove[moves.indicesToMove.length - 1]];
                this.grid[index] = 16;
                if (this.isGameOver()) {
                    console.log('Game Over!');
                    this.gameOver = true;
                }
            }, 200);
        }
    }

    isValidMoveV2(index: number, openIndex: number): boolean {
        // If in the same column or row, consider it a valid move
        return openIndex % 4 === index % 4 || Math.floor(openIndex / 4) === Math.floor(index / 4);
    }

    getMoves(index: number, openIndex: number): { direction: string; indicesToMove: number[] } {
        const indexDifference = openIndex - index;
        const indicesToMove = [];
        if (indexDifference > 0 && indexDifference < 4) {
            for (let i = index; i < openIndex; i++) {
                indicesToMove.push(i);
            }
            return {
                direction: 'right',
                indicesToMove,
            };
        } else if (indexDifference < 0 && indexDifference > -4) {
            for (let i = index; i > openIndex; i--) {
                indicesToMove.push(i);
            }
            return {
                direction: 'left',
                indicesToMove,
            };
        } else if (indexDifference > 0) {
            for (let i = index; i < openIndex; i += 4) {
                indicesToMove.push(i);
            }
            return {
                direction: 'down',
                indicesToMove,
            };
        } else {
            for (let i = index; i > openIndex; i -= 4) {
                indicesToMove.push(i);
            }
            return {
                direction: 'up',
                indicesToMove,
            };
        }
    }

    /** This method checks to see if the selected square is adjacent to the open square. If so it is a valid choice of move.
     * @param index number, the index of the chosen move
     * @param openIndex number, the index of the open square
     */
    isValidMove(index: number, openIndex: number): string {
        let validMove = false;
        switch (openIndex % 4) {
            case 0: // first column
                validMove = index === openIndex + 1 || this.isValidVerticalMove(index, openIndex);
                break;
            case 1: // second column
            case 2: // third column
                validMove =
                    index === openIndex - 1 || index === openIndex + 1 || this.isValidVerticalMove(index, openIndex);
                break;
            case 3: // fourth column
                validMove = index === openIndex - 1 || this.isValidVerticalMove(index, openIndex);
                break;
            default:
                return;
        }
        if (validMove) {
            if (index === openIndex - 1) {
                return 'right';
            } else if (index === openIndex + 1) {
                return 'left';
            } else if (index < openIndex) {
                return 'down';
            } else {
                return 'up';
            }
        }
    }

    /** Determines whether the open square is vertically adjacent to the chosen square
     * @param index number, the index of the chosen square
     * @param openIndex number, the index of the open square
     */
    isValidVerticalMove(index: number, openIndex: number): boolean {
        switch (Math.floor(openIndex / 4)) {
            case 0: // first row
                return index === openIndex + 4;
            case 1: // second row
            case 2: // third row
                return index === openIndex - 4 || index === openIndex + 4;
            case 3: // fourth row
                return index === openIndex - 4;
            default:
                return false;
        }
    }

    /* Makes check to see if all the numbers are in the correct order
     */
    isGameOver(): boolean {
        for (let i = 0; i < 16; i++) {
            if (this.grid[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    getNumberOfInversions(): number {
        let inversions = 0;
        for (let i = 0; i < this.grid.length - 1; i++) {
            for (let j = i + 1; j < this.grid.length - 1; j++) {
                if (this.grid[i] > this.grid[j]) {
                    inversions++;
                }
            }
        }
        return inversions;
    }

    /* Randomize array in-place using Durstenfeld shuffle algorithm
     * thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */
    shuffleArray(array): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
