'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let min = 0;
    let max = 0;
    
    arr.sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
    })
    
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length-1){
            min += parseInt(arr[i]);
        }
        if(i > 0){
            max += parseInt(arr[i]);
        }
        
        
    }
    
    console.log(`${min} ${max}`)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
