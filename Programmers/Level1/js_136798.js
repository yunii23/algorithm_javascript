// 기사단원의 무기

let number = 10;
let limit = 3;
let power = 2;
let answer = 0;


for(let i=1; i<=number; i++) {
    let count = 0;

    for(let j=1; j*j<=i; j++) {
        if(j * j == i) count++;
        else if(i % j == 0) count +=2;
    }

    if(count > limit) answer += power;
    else answer += count;

}

console.log(answer);