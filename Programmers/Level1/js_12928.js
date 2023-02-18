// 약수의 합

let n = 12;

let answer = 0;

for(let i=1; i<=n; i++) {
    if(n % i == 0) answer += i;
}

console.log(answer);
