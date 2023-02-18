// 나누어 떨어지는 숫자 배열

let arr = [5, 9, 7, 10];
let divisor = 5;

let answer = [];

for(let i=0; i<arr.length; i++) {
    if(arr[i] % divisor == 0) answer.push(arr[i]);
}

answer.sort((c1, c2) => c1 - c2);

if(answer.length == 0) answer.push(-1);

console.log(answer);