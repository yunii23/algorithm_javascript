// [3차] n진수 게임

let n = 16;
let t = 16;
let m = 2;
let p = 1;
let answer = '';

let result = [];
let temp = [];

let i = 0;
while(temp.length < t * m) {
    let change = i.toString(n);

    if(change.length == 1) {
        temp.push(change);
    }
    else {
        while(change.length != 0 && temp.length < t * m) {
            temp.push(change[0]);
            change = change.substring(1, change.length+1);
        }
    }

    i++;
}

console.log(temp);

for(let i=p-1; i<temp.length; i+=m) {
    result.push(temp[i]);
}

console.log(result);

answer = result.join("").toUpperCase();

console.log(answer);