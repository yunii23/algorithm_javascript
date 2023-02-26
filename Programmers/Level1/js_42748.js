// k번째 수

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

let answer = [];

for(let a=0; a<commands.length; a++) {
    
    let i = commands[a][0];
    let j = commands[a][1];
    let k = commands[a][2];

    let arr = array.slice(i-1, j);
    arr.sort((c1, c2) => c1 - c2);
    answer.push(arr[k-1]);
}

console.log(answer);