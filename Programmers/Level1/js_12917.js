// 문자열 내림차순으로 배치하기

let s = 'Zbcdefg';

const arr = [...s];

arr.sort((c1, c2) => c1 > c2 ? -1 : 1);

let answer = '';
answer = arr.join("");

console.log(answer);