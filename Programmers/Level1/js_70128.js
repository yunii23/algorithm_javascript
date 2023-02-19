// 내적

let a = [1,2,3,4];
let b = [-3, -1, 0, 2];

let answer = 1234567890;

let result = 0;
for(let i=0; i<a.length; i++) {
    result += a[i] * b[i];
}
answer = result;

console.log(answer);