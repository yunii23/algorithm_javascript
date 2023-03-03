// 모의고사

let answers = [1,3,2,4,2];
let answer = [];

let one = [1, 2, 3, 4, 5];
let two = [2, 1, 2, 3, 2, 4, 2, 5];
let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

let o = answers.filter((a, i) => a === one[i % one.length]).length;
let tw = answers.filter((a, i) => a === two[i % two.length]).length;
let th = answers.filter((a, i) => a === three[i % three.length]).length;

let max = Math.max(o, tw, th);

if(o === max) answer.push(1);
if(tw === max) answer.push(2);
if(th === max) answer.push(3);

console.log(answer);

// let oneP = 0;
// let twoP = 0;
// let threeP = 0;

// for(let i=0; i<answers.length; i++) {
//     if(answers[i] == one[i]) oneP++;
//     if(answers[i] == two[i]) twoP++;
//     if(answers[i] == three[i]) threeP++;
// }

// if(oneP > twoP && oneP > threeP) answer.push(1);
// else if(twoP > oneP && twoP > threeP) answer.push(2);
// else if(threeP > twoP && threeP > oneP) answer.push(3);
// else if(oneP > threeP && oneP == twoP) {
//     answer.push(1);
//     answer.push(2);
// } else if(oneP > twoP && oneP == threeP) {
//     answer.push(1);
//     answer.push(3);
// }
// else if(twoP > oneP && twoP == threeP) {
//     answer.push(2);
//     answer.push(3);
// } else if(oneP == twoP && oneP == threeP) {
//     answer.push(1);
//     answer.push(2);
//     answer.push(3);
// }

// console.log(answer);