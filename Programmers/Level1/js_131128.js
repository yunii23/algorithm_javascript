// 숫자 짝궁
// 참고 https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90-%EC%A7%9D%EA%BF%8D

let X = "100";
let Y = "203045";
let answer = "";
let n = 0;

X = [...X];
Y = [...Y];

for(let i=0; i<10; i++) {
    let curX = X.filter(a => Number(a) === i).length
    let curY = Y.filter(a => Number(a) === i).length
    answer += String(i).repeat(Math.min(curX, curY))
}

if(answer === '') answer = "-1";
else if(Number(answer) === 0) answer = "0";

answer.split("").sort((a, b) => Number(b) - Number(a)).join("");


// let result = [...Y].filter(x => [...X].includes(x));
// result = [...Y].filter(x => result.includes(x));

// console.log(result);

// if(result.length == 0) answer = "-1";
// else {
//     result.sort().reverse();
//     console.log(result);
//     // n = Number(result.join(""));
//     // answer = n.toString();
//     // if(result.length == result.filter(i => i == 0).length) {
//     //     answer = "0";
//     // }
//     // else answer = result.join("");
//     answer = result.join("");
// }

console.log(answer);