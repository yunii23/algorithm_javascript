// 행렬의 곱셈
// 참고 https://velog.io/@sisofiy626/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Lv.2-%ED%96%89%EB%A0%AC%EC%9D%98-%EA%B3%B1%EC%85%88-JavaScript

let arr1 = [[1, 2, 3], [4, 5, 6]];
let arr2 = [[1, 4], [2, 5], [3, 6]];

let answer = [];

for(let i=0; i<arr1.length; i++) {
    let result = [];
    for(let j=0; j<arr2[0].length; j++) {
        let value = 0;
        for(let k=0; k<arr2.length; k++) {
            value += arr1[i][k] * arr2[k][j]

        }
        result.push(value)
    }
    answer.push(result)
}


console.log(answer);