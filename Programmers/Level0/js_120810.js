const fs = require('fs');
const inputData = fs.readFileSync(__dirname+'/example.txt', 'utf-8').toString().split(' ').map(value => + value);

let answer = -1; 

let num1 = inputData[0];
let num2 = inputData[1];
answer = num1 % num2;

console.log(answer);