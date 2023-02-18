// x만큼 간격이 있는 n개의 숫자

const fs = require('fs');
const arr = fs.readFileSync(__dirname+'/example.txt', 'utf-8').toString().split(' ').map((value) => +value);

let x = arr[0];
let n = arr[1];
let sum = x;

let answer = [];

for(let i=0; i<n; i++) {
    answer.push(sum);
    sum += x;
}

console.log(answer);