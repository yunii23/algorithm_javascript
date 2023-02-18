// 자릿수 더하기

let n = 987;

let answer = 0;
console.log(typeof(n));

let sum = 0;

while(n != 0) {
    sum += n % 10;
    n = parseInt(n/10);
}

console.log(Math.floor(sum));