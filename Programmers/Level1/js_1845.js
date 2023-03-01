// 폰켓몬

let nums = [3,3,3,2,2,2];

let answer = 0;

let set = new Set(nums);
let arr = [...set];

if(parseInt(nums.length / 2) >= arr.length) answer = arr.length;
else if (parseInt(nums.length / 2) < arr.length) answer = parseInt(nums.length / 2);

console.log(answer);