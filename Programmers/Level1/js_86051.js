// 없는 숫자 더하기

let numbers = [1,2,3,4,6,7,8,0];
let answer = -1;

let sum = 45;

for(let i=0; i<numbers.length; i++) {
    sum -= numbers[i];
}
answer = sum;
console.log(answer);