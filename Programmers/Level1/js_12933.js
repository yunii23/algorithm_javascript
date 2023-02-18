// 정수 내림차순으로 배치하기

let n = 118372;

let answer = 0;

n = String(n);

let arr = n.split("").map((value) => +value);

arr.sort(function(c1, c2) {
    return c2 - c1;
})

answer = arr.join("");
answer = parseInt(answer);

console.log(typeof answer);