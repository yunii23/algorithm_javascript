// 두 정수 사이의 합

const fs = require('fs');
const arr = fs.readFileSync(__dirname+'/example.txt', 'utf-8').toString().split(' ').map((value) => +value);

let a = arr[0];
let b = arr[1];

let answer = 0;

if(a == b) {
    answer = a;
}

else if (a > b){
    for(let i=b; i<=a; i++) {
        answer += i;
    }    
}

else {
    for(let i=a; i<=b; i++) {
        answer += i;
    }  
}

console.log(answer);