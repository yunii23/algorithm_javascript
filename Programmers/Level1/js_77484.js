// 로또의 최고 순위와 최저 순위

let lottos = [0, 0, 0, 0, 0, 0];
let win_nums = [38, 19, 20, 40, 15, 25];
let answer = [];

let intersection = lottos.filter(x => win_nums.includes(x)).length;
let zero = lottos.filter(i => i == 0).length;

let arr = [-1, 6, 5, 4, 3, 2, 0];

answer.push(arr.indexOf(intersection + zero));
if(intersection <= 1) intersection = 0;
answer.push(arr.indexOf(intersection));

console.log(answer);