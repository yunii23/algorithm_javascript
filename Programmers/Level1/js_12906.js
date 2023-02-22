// 같은 숫자는 싫어

let arr = [4,4,4,3,3];

let answer = [];

answer.push(arr[0]);
for(let i=1; i<arr.length; i++) {
    if(answer[answer.length-1] != arr[i]) answer.push(arr[i]);
}

console.log(answer);