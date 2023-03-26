// n^2 배열 자르기

let n = 5;
let left = 7;
let right = 16;
let answer = [];

let narr = new Array(n);
for(let i=0; i<narr.length; i++) {
    narr[i] = new Array(n);

    for(let j=0; j<n; j++) {
        narr[i][j] = Math.max(i+1, j+1);
    }
}
console.log(narr);

let i = left % n + 1;
let j = parseInt(left / n) + 1;
for(let k=0; k<right+1-left; k++) {
    console.log(j + " " + i);
    answer[k] = Math.max(j, i);

    if(i == n) {
        i = 1;
        j ++;
    } else {
        i++;
    }

}

// let arr = narr.reduce((a, b) => {
//     return a.concat(b);
// })

// answer = arr.slice(left, right+1)

console.log(answer);