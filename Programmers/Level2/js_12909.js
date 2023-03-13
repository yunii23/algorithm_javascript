// 올바른 괄호

let s = "()()";
let answer = true;

let arr = s.split("");
let temp = [];

for(let i=0; i<arr.length; i++) {
    temp.push(arr[i]);

    if(temp[temp.length-1] == ")" && temp[temp.length-2] == "(") {
        temp.splice(temp.length-2, 2);
    }
    
}

if(temp.length == 0) answer = true;
else answer = false;

console.log(answer);