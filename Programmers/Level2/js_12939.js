// 최댓값과 최솟값

let s = "1 2 3 4";
let answer = '';

let arr = s.split(" ");

answer += Math.min(...arr) + " ";
answer += Math.max(...arr);

console.log(answer);