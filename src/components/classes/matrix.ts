export class Matrix {
    matrix: number[][];
    rows: number;
    columns: number;

    constructor(matrix: number[][]) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.columns = matrix[0].length;
        matrix.forEach((row) => {
            if (row.length !== this.columns) {
                throw new Error('Invalid matrix, not all columns of same size');
            }
        });
    }

    /**
     * Create a blank square matrix of an input size (all zeroes or identity matrix)
     * @param dim - size of the square matrix
     * @param identity - whether to put 1's in the diagonals to make an identity matrix
     */
    static createBlankSquareMatrixFromDimensions(dim: number, identity = false): Matrix {
        const newMatrix = [];
        for (let i = 0; i < dim; i++) {
            const newColumn = [];
            for (let j = 0; j < dim; j++) {
                if (identity && i === j) {
                    newColumn.push(1);
                } else {
                    newColumn.push(0);
                }
            }
            newMatrix.push(newColumn);
        }
        return new Matrix(newMatrix);
    }

    static createBlankMatrix(nRows: number, nCols: number) {
        const newMatrix = [];
        for (let i = 0; i < nRows; i++) {
            const newColumn = [];
            for (let j = 0; j < nCols; j++) {
                newColumn.push(0);
            }
            newMatrix.push(newColumn);
        }
        return new Matrix(newMatrix);
    }

    static multiply(leftMatrix: Matrix, rightMatrix: Matrix): Matrix {
        if (leftMatrix.columns !== rightMatrix.rows) {
            throw new Error('Cannot multiply these two matrices together');
        }
        const newMatrix = Matrix.createBlankMatrix(leftMatrix.rows, rightMatrix.columns);
        for (let i = 0; i < leftMatrix.rows; i++) {
            for (let j = 0; j < rightMatrix.columns; j++) {
                let sum = 0;
                for (let k = 0; k < leftMatrix.columns; k++) {
                    sum += leftMatrix.matrix[i][k] * rightMatrix.matrix[k][j];
                }
                newMatrix.matrix[i][j] = sum;
            }
        }
        return newMatrix;
    }

    static adjoint(matrix: Matrix, adj: Matrix) {
        if (matrix.rows === 1) {
            adj.matrix[0][0] = 1;
            return;
        }

        let sign = 1;
        const tempMatrix = Matrix.createBlankSquareMatrixFromDimensions(matrix.rows);

        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.rows; j++) {
                Matrix.getCofactor(matrix, tempMatrix, i, j, matrix.rows);

                sign = (i + j) % 2 === 0 ? 1 : -1;

                adj.matrix[j][i] = sign * Matrix.getDeterminant(tempMatrix, matrix.rows - 1);
            }
        }
    }

    /**
     * Copied from https://www.geeksforgeeks.org/determinant-of-a-matrix/.
     * Recursive function to get determinant of a matrix
     */
    static getDeterminant(matrix: Matrix, n: number) {
        let d = 0;
        if (n === 1) {
            return matrix.matrix[0][0];
        }
        const tempMatrix = Matrix.createBlankSquareMatrixFromDimensions(matrix.rows);
        let sign = 1;
        for (let f = 0; f < n; f++) {
            Matrix.getCofactor(matrix, tempMatrix, 0, f, n);
            d += sign * matrix.matrix[0][f] * Matrix.getDeterminant(tempMatrix, n - 1);
            sign = -1 * sign;
        }
        return d;
    }

    /**
     * Copied from https://www.geeksforgeeks.org/determinant-of-a-matrix/.
     */
    private static getCofactor(matrix: Matrix, tempMatrix: Matrix, p: number, q: number, n: number) {
        let i = 0;
        let j = 0;
        for (let row = 0; row < n; row++) {
            for (let column = 0; column < n; column++) {
                if (row !== p && column !== q) {
                    tempMatrix.matrix[i][j++] = matrix.matrix[row][column];
                    if (j === n - 1) {
                        j = 0;
                        i++;
                    }
                }
            }
        }
    }

    get(row: number, column: number) {
        return this.matrix[row][column];
    }

    multiply(otherMatrix: Matrix) {
        return Matrix.multiply(this, otherMatrix);
    }

    transpose() {
        const newMatrix = Matrix.createBlankMatrix(this.columns, this.rows);
        for (let j = 0; j < newMatrix.rows; j++) {
            for (let i = 0; i < newMatrix.columns; i++) {
                newMatrix.matrix[j][i] = this.matrix[i][j];
            }
        }
        return newMatrix;
    }

    isSquare() {
        return this.rows === this.columns;
    }

    inverse() {
        if (!this.isSquare()) {
            throw new Error('Can\'t get inverse of non-square matrix!');
        }
        const inverseMatrix = Matrix.createBlankSquareMatrixFromDimensions(this.rows);
        const determinant = Matrix.getDeterminant(this, this.rows);
        if (determinant === 0) {
            throw new Error('Matrix is singular, can\'t find inverse');
        }
        const adjoint = Matrix.createBlankSquareMatrixFromDimensions(this.rows);
        Matrix.adjoint(this, adjoint);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                inverseMatrix.matrix[i][j] = adjoint.matrix[i][j] / determinant;
            }
        }
        return inverseMatrix;
    }
}
