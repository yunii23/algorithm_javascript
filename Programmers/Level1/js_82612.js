// 부족한 금액 계산하기

let price = 3;
let money = 20;
let count = 4;

let answer = -1;

let sum = 0;
for(let i=1; i<=count; i++) {
    sum = sum + price * i;
}

if(sum - money <= 0) answer = 0;
else answer = sum - money;

console.log(answer);