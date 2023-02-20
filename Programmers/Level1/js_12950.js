// 행렬의 덧셈

let arr1 = [[1,2], [2,3]];
let arr2 = [[3,4], [5,6]];

let answer = [[]];
answer = Array.from(new Array(arr1.length), () => new Array(arr1[0].length).fill(0));

for(let i=0; i<arr1.length; i++) {
    for(let j=0; j<arr1[i].length; j++) {
        answer[i][j] = (arr1[i][j] + arr2[i][j]);
    }
}

console.log(answer);