// 예상 대진표

let n = 8;
let a = 4;
let b = 7;
let answer = 0;

while(a != b) {
    a = Math.round(a/2);
    b = Math.round(b/2);
    answer ++;

    // if(a ) {
    //     answer ++;
    //     break;
    // }
}

console.log(answer);