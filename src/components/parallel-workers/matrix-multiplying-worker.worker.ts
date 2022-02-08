import { Matrix } from '../classes/matrix';

addEventListener('message', ({ data }) => {
    const leftMatrix = data.data.leftMatrix;
    const rightMatrix = data.data.rightMatrix;
    const result = Matrix.multiply(leftMatrix, rightMatrix);
    postMessage({ result, dataIndex: data.dataIndex });
});
