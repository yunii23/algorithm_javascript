// 수박수박수박수박수박수?

let n = 3;

let answer = '';

for(let i=1; i<=n; i++) {
    if(i % 2 == 0) answer += '박';
    else answer += '수';
}

console.log(answer);