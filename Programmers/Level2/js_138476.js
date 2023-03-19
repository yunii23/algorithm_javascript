// 귤 고르기
// 참고 https://leejams.github.io/%EA%B7%A4%EA%B3%A0%EB%A5%B4%EA%B8%B0/

let k = 2;
let tangerine = [1, 1, 1, 1, 2, 2, 2, 3]	;
let answer = 0;

let obj = {};

tangerine.forEach(el => {
    obj[el] = ++obj[el] || 1;
});

let kind = Object.values(obj).sort((a, b) => b - a);

let sum = 0;

for(let num of kind) {
    answer ++;
    if(k > num) k -= num;
    else break;
}

// let map = new Map();

// for(let i=0; i<tangerine.length; i++) {
//     if(map.has(tangerine[i])) {
//         map.set(tangerine[i], map.has(tangerine[i]) + 1)
//     }
//     else {
//         map.set(tangerine[i], 1);
//     }
// }

// let sorted = new Map([...map].sort((c1, c2) => c2[1] - c1[1]));

// for(let value of sorted.values()) {
//     k -= value;
//     answer++;
    
//     if(k == 0) break;
// }

console.log(answer);