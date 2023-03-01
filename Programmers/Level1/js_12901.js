// 2016년

let a = 5;
let b = 24;

let answer = '';

let date = new Date(2016, a-1, b);
const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
answer = week[date.getDay()];

console.log(answer);