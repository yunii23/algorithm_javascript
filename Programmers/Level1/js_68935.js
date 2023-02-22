// 3진법 뒤집기

let n = 78413450;

let answer = 0;

n = n.toString(3);
let value = n.toString(3).split('').reverse().join('');

answer = parseInt(value, 3);

console.log(answer);