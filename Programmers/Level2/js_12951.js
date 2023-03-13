// JadenCase 문자열 만들기

let s = "3people    unFollowed me";
let answer = '';

let reg = /[A-Za-z]/;
let arr = [...s];

console.log(arr);

let temp = '';
for(let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] == ' ') {
        if(temp.length > 0) {
            temp = temp.toLowerCase();
            temp = temp[0].toUpperCase() + temp.substring(1);
            answer += temp + arr[i];
            temp = '';
        }
        else {
            answer += arr[i];
        }
    }
    else {
        temp += arr[i];
    }

    if(i == arr.length - 1 && temp.length > 0) {
        temp = temp.toLowerCase();
        temp = temp[0].toUpperCase() + temp.substring(1);
        answer += temp;
    } 
    
}

// if(temp.length > 0) {
//     temp = temp.toLowerCase();
//     temp = temp[0].toUpperCase() + temp.substring(1);
//     answer += temp;
// } 

// for(let i=0; i<arr.length; i++) {
//     // let temp = arr[i].toLowerCase().split("");

//     // if(reg.test(temp[0])) temp[0] = temp[0].toUpperCase();
//     // answer += temp.join("") + " ";
//     arr[i] = arr[i].toLowerCase();
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
//     console.log(arr[i]);
// }

// answer += arr.join(" ");

// answer = answer.trim();

console.log(answer);