// 평균 구하기

const fs = require('fs');
const arr = fs.readFileSync(__dirname+'/example.txt', 'utf-8').toString().split(' ').map((value) => +value);

let answer = 0;

console.log(arr);
let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
answer = sum / arr.length;
console.log(answer);

//const inputTestCase = [];

// for(let i=0; i<inputData.length; i++) {
//     const arr = inputData[i].split(" ").map((value) => +value);

//     let newArr = [];
//     for(let j=0; j<arr.length; j++) {
//         newArr.push(arr[j]);
//     }
//     // const testCase = {
//     //     arr: newArr,
//     // };
//     inputTestCase.push(testCase);
// }

//solution(inputTestCase);

// function solution(inputTestCase) {
//     let answer = -1;
    
//     for()
//     console.log(inputTestCase[0].arr[0]);
// }


