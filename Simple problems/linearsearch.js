let arr = [1, 2, 3, 5, 6];
let n = 5;

function myFunc(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i; 
        }
    }
    return -1; 
}

console.log(myFunc(arr, n)); 

