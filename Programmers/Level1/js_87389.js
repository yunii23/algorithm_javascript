// 나머지가 1이 되는 수 찾기

let n = 12;

let answer = 0;

for(let i=1; i<n; i++) {
    if(n % i == 1) {
        answer = i;
        break;
    }
}

console.log(answer);