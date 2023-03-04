// 과일장수

let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]; //24
let answer = 0;
//7 2 [7, 7, 5, 3, 3, 3, 1] 26

score.sort((c1, c2) => c2 - c1);

for(let i=0; i+m<=score.length; i+=m) {
    console.log(i);
    answer += score[i+m-1] * m;
    console.log(answer);
}

// while(score.length >= m) {
//     let arr = score.slice(0, m);
//     let p = Math.min(...arr);
//     answer += p * m;
//     console.log("p " + p + " m " + m);
//     score.splice(0, m);
// }

console.log(answer);