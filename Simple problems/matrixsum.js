var mat =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let sum=0;
function matrixSum(mat){
    for(let i=0; i<mat.length; i++){
        for(j=0; j<mat[i].length; j++){
            sum+= mat[i][j]
        }
    }
    return sum;
}

console.log(matrixSum(mat))


