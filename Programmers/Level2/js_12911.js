// 다음 큰 숫자

let n = 15;
let answer = 0;

let i = n+1;
let nOne = n.toString(2).replace(/0/g, "").length;

while(true) {
    
    if(i.toString(2).replace(/0/g, "").length == nOne) {
        console.log(i);
        break
    }
    i++;
}

answer = i;