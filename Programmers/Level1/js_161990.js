// 바탕화면 정리

let wallpaper = [".#...", "..#..", "...#."];
let answer = [];

let x = [];
let y = [];

for(let i=0; i<wallpaper.length; i++) {
    let temp = [...wallpaper[i]];
    
    for(let j=0; j<temp.length; j++) {
        if(temp[j] == "#") {
            x.push(i);
            y.push(j);
        }
    }
}

answer.push(Math.min(...x));
answer.push(Math.min(...y));
answer.push(Math.max(...x) + 1);
answer.push(Math.max(...y) + 1);

console.log(answer);