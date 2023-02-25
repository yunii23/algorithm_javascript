// 시저 암호

let s = "a B z";
let n = 4;

let answer = '';

let arr = [...s];

for(let i=0; i<s.length; i++) {
    if(arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) >= 65) {
        if(arr[i].charCodeAt(0) + n > 90) {
            let min = 90 - arr[i].charCodeAt(0);
            arr[i] = String.fromCharCode(64 + n - min); 
        }
        else {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + n);
        }
    }
    else if(arr[i].charCodeAt(0) <= 122 && arr[i].charCodeAt(0) >= 97) {
        if(arr[i].charCodeAt(0) + n > 122) {
            let min = 122 - arr[i].charCodeAt(0);
            arr[i] = String.fromCharCode(96 + n - min); 
        }
        else {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + n);
        }
    }
}

answer = arr.join("");

console.log(answer);

