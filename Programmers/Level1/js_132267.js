// 콜라문제

let a = 3;
let b = 2;
let n = 10;
let answer = 0;

let remainder = 0;
while(n >= a) {
    remainder = n % a;
    n = parseInt(n / a) * b;
    answer += n;
    n += remainder;
}

console.log(answer);