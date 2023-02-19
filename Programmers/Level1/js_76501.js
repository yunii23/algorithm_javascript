// 음양 더하기

let absolutes = [4, 7, 12];
let signs = [true, false, true];

let answer = 123456789;

let sum = 0;
for(let i=0; i<absolutes.length; i++) {
    if(signs[i] == false) {
        absolutes[i] *= -1;
    }

    sum += absolutes[i];
}

answer = sum;
console.log(answer);