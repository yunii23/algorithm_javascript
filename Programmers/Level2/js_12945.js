// 피보나치수 

let n = 5;
let answer = 0;

let arr = [0 % 1234567, 1 % 1234567]
for(let i=2; i<=n; i++) {
    arr.push((arr[i-2] + arr[i-1]) % 1234567)
}

answer = arr[arr.length-1];

console.log(answer);