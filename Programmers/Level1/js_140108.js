// 문자열 나누기

let s = "abracadabra";
let answer = 0;

let x = '';
let xCount = 0;
let notCount = 0;

for(let i=0; i<s.length; i++) {

    if(xCount == 0) {
        x = s[i];
        xCount++;
    }
    else {
        if(s[i] == x) xCount ++;
        else notCount ++;
    }

    if(xCount == notCount) {
        answer ++;
        xCount = 0;
        notCount = 0;
    }
    if(i == s.length - 1 && xCount != notCount) {
        answer ++;
    }
}

console.log(answer);