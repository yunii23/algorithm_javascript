// 하샤드 수

let x = 13;
let answer = true;

// x의 자릿수 합으로 x가 나누어 져야 함

let value = x;
let sum = 0;
while(value != 0) {
    sum += value % 10;
    value = parseInt(value / 10);
}

if(x % sum == 0) answer = true;
else answer = false;

console.log(answer);