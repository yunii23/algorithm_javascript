// 예산

let d = [2,2,3,3];
let budget = 10;
let answer = 0;

// 최대 몇개의 부서에 물품을 지원할 수 있는가

d.sort((c1, c2) => c1 - c2);
let result = 0;
let count = 0;

for(let i=0; i<d.length; i++) {
    if(result + d[i] > budget) break;
    result += d[i];
    count++;
}
answer = count;
console.log(answer);