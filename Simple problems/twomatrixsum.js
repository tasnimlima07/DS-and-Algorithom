var mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var mat2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function matrixSum(mat1, mat2) {
    let sum = [];
    for (let i = 0; i < mat1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < mat1[i].length; j++) {
            rowSum.push(mat1[i][j] + mat2[i][j]);
        }
        sum.push(rowSum);
    }
    return sum;
}

console.log(matrixSum(mat1, mat2));
