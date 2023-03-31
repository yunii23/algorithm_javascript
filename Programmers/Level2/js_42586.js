// 기능 개발

let progresses = [99, 99, 99, 90, 90, 90];
let speeds = [1,1,1,1,1,1];
let answer = [];

let arr = [];
for(let i=0; i<progresses.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]))
}
console.log(arr);

let release = 1;
let maxx = arr[0];
let sum = 0;
for(let i=1; i<arr.length; i++) {
    if(maxx < arr[i]) {
        answer.push(release);
        sum += release;
        release = 1;
        maxx = arr[i]
    }
    else {
        maxx = Math.max(maxx, arr[i])
        release ++;
    }
}

if(arr.length - sum != 0) answer.push(release)

console.log(answer);