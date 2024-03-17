// HackerRank Problem

// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero-indexed.
// Declare an integer, lastAnswer, and initialize it to 0.
// Declare an answers array.

// Parse through each query. The format of each query will be [type, x, y]. There are 2 types of queries, given as an array of strings for you to parse, treat them according to their type:
// Query: 1 x y
// Let idx = ( (x ^ lastAnswer) % n ).
// Append the integer y to arr[idx].

// Query: 2 x y
// Let idx = ( (x ^ lastAnswer) % n ).
// Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.

// Store the new value of lastAnswer to answers array.
// Return answers array.

// Note: ^ is the bitwise XOR operation. % is the modulo operator.
// Finally, size(arr[idx]) is the number of elements in arr[idx].


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    let seqList = new Array(n).fill().map(() => []);
    let lastAnswer = 0;
    let results = [];

    for (let i = 0; i < queries.length; i++) {
        let [queryType, x, y] = queries[i];
        if (queryType === 1) {
            let index = (x ^ lastAnswer) % n;
            seqList[index].push(y);
        } else if (queryType === 2) {
            let index = (x ^ lastAnswer) % n;
            let seq = seqList[index];
            lastAnswer = seq[y % seq.length];
            results.push(lastAnswer);
        }
    }

    return results;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
