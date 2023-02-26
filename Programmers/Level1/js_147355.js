// 크기가 작은 부분문자열

let t = 500220839878;
let p = 7;
let answer = 0;

let s = t.toString();
let pLen = p.toString().length;

for(let i=0; i<s.length-pLen+1; i++) {
    let temp = s.substring(i, i+pLen);
    console.log(temp);
    if(Number(temp) <= p) answer++;
}

console.log(answer);