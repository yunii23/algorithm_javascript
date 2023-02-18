// 문자열 내 p와 y의 개수 

let s = "Pyy";

let answer = true;

let p = 0;
let y = 0;

let lower = s.toLowerCase();

for(let i of lower) {
    if(i == 'p') p++;
    else if(i == 'y') y++;
}

if(p == y) answer = true;
else answer = false

console.log(answer);