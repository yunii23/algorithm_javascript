// 문자열 다루기 기본

let s = "10e1";

let answer = true;
let check = /\d/;

if((s.length == 4 || s.length == 6)) {
    let arr = [...s];
    for(let i=0; i<arr.length; i++) {
        if(!Number.isInteger(Number(arr[i]))) answer = false; 
    }
} else {
    answer = false;
}

console.log(answer);