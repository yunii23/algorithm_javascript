// 위장
// 참고 https://school.programmers.co.kr/questions/33347

let clothes = [["a", "headgear"], ["b", "headgear"], ["c", "eyewear"], ["d", "eyewear"], ["e", "face"], ["f", "face"]];
let answer = 0;

//let obj = {};
let map = new Map();
for(let i=0; i<clothes.length; i++) {
    if(map.has(clothes[i][1])) map.set(clothes[i][1], map.get(clothes[i][1])+1);
    else map.set(clothes[i][1], 1);
}
console.log(map);

let sum = 1;
for(let v of map.values()) {
    sum *= (1 + v);
}

answer = sum - 1;

console.log(answer);