// 실패율

let N = 4;
let stages = [4, 4, 4, 4, 4];

let answer = [];
let map = new Map();

let leng = stages.length;
for(let i=1; i<=N; i++) {
    let people = stages.filter(idx => i >= idx && idx > i-1).length;
    console.log(people / leng * 100);
    map.set(i, people / leng * 100);
    leng -= people;
}

let desc = new Map([...map].sort((c1, c2) => c1[1] - c2[1] || c2[0] - c1[0]).reverse());

for(let k of desc.keys()) answer.push(k);

console.log(answer);