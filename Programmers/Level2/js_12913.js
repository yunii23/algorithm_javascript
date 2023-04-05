// 땅따먹기
// 참고 https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%95%85%EB%94%B0%EB%A8%B9%EA%B8%B0-JavaScript

let land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];
let answer = 0;

console.log(...land);

answer = Math.max(...land.reduce((a, c) => {
    console.log(a);
    console.log(c);
    console.log(c[0] + "   " + a[1] + " " + a[2] + " " + a[3]);
    console.log("000");
    console.log(c[1] + "   " + a[0] + " " + a[2] + " " + a[3]);
    console.log("111");
    console.log(c[2] + "   " + a[0] + " " + a[1] + " " + a[3]);
    console.log("222");
    console.log(c[3] + "   " + a[0] + " " + a[1] + " " + a[2]);
    console.log("333");
    return [
        c[0] + Math.max(a[1], a[2], a[3]),
        c[1] + Math.max(a[0], a[2], a[3]),
        c[2] + Math.max(a[0], a[1], a[3]),
        c[3] + Math.max(a[0], a[1], a[2]),
    ];
    
}, [0, 0, 0, 0]));

console.log(answer);

// 동적계획법으로 풀었으나 효율성 문제에서 실패

// let num = land.length;

// let dp = Array.from(new Array(land.length), () => new Array(4).fill(0));

// for(let i=0; i<4; i++) {
//     dp[0][i] = land[0][i];
// }

// console.log(dp);

// answer = Math.max(space(num-1, 0), space(num-1, 1), space(num-1, 2), space(num-1, 3));

// console.log(answer);

// function space(n, col) {

//     if(dp[n][col] == 0) {
        
//         if(col == 0) {
//             dp[n][0] = Math.max(space(n-1, 1), space(n-1, 2), space(n-1, 3)) + land[n][0];
//         }
//         else if(col == 1) {
//             dp[n][1] = Math.max(space(n-1, 0), space(n-1, 2), space(n-1, 3)) + land[n][1];
//         }
//         else if(col == 2) {
//             dp[n][2] = Math.max(space(n-1, 0), space(n-1, 1), space(n-1, 3)) + land[n][2];
//         }
//         else if(col == 3) {
//             dp[n][3] = Math.max(space(n-1, 0), space(n-1, 1), space(n-1, 2)) + land[n][3];
//         }
//     }

//     return dp[n][col];
// }