// 최솟값 만들기

let A = [1, 4, 2];
let B = [5, 4, 4];
let answer = 0;

A.sort((c1, c2) => c1 - c2);
B.sort((c1, c2) => c2 - c1);

for(let i=0; i<A.length; i++) {
    answer += A[i] * B[i];
}

console.log(answer);