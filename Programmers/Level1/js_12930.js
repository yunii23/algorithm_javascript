// 이상한 문자 만들기

let s = "try hello  world";
let answer = '';

//짝수 대문자 홀수 소문자

let arr = [...s];
console.log(arr);

const regex = /[a-zA-Z]/;

let temp = '';
let count = 0;

for(let i=0; i<arr.length; i++) {
    if(regex.test(arr[i])) {
        console.log(i + " " + arr[i] + " count " + count);
        if(count % 2 == 0) temp += arr[i].toUpperCase();
        else temp += arr[i].toLowerCase();
        count++; 
    } 
    else {
        answer += temp + arr[i];
        count = 0;
        temp = '';
    }

    if(i == arr.length-1) {
        answer += temp;
    }
}

console.log(answer);

// for(let i=0; i<arr.length; i++) {
//     let change = arr[i].split("");

//     for(let j=0; j<change.length; j++) {
//         if(j % 2 == 0) change[j] = change[j].toUpperCase();
//         else change[j] = change[j].toLowerCase();

//         if(j == change.length-1) arr[i] = change.join("");
//     }

//     answer += arr[i] + " ";
// }

// console.log(answer);