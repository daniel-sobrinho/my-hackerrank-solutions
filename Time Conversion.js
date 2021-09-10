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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hour = '';
    
    if(s[8] == 'A'){
        if((s[0]+s[1]) == '12'){
            hour = '00';
        }else{
            hour = s[0]+s[1];
        }
    }else if(s[8] == 'P'){    
        let aux = s[0]+s[1];
        aux = parseInt(aux);
        if(aux < 12){
            aux += 12
        }
        hour = aux.toString();
    }
    
    hour += s.substr(2, 6);
    
    return hour
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
