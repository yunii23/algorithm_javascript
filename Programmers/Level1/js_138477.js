// 명예의 전당 (1)

let k = 4;
let score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

let answer = [];

let arr = [];
for(let i=0; i<score.length; i++) {
    arr.push(score[i]);

    if(arr.length > k) {
        let idx = arr.indexOf(Math.min(...arr));
        arr.splice(idx, 1);
        let min = Math.min(...arr);
        answer.push(min);
    }
    else {
        answer.push(Math.min(...arr));
    } 
}

console.log(answer);