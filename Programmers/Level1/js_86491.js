// 최소 직사각형

let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let answer = 0;

let width = [];
let heigth = [];

for(let i=0; i<sizes.length; i++) {
    let max = Math.max(sizes[i][0], sizes[i][1]);
    let min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    heigth.push(min);
}

answer = Math.max(...width) * Math.max(...heigth);

console.log(answer);
