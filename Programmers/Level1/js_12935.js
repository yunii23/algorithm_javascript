// 제일 작은 수 제거하기

let arr = [10];

let answer = [];

if (answer.length == 0 || answer.length == 1) answer.push(-1);
else {
    let min = Math.min.apply(null, arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min) arr.splice(i, 1);
    }

    answer = arr;
}

console.log(arr);
console.log(answer);
