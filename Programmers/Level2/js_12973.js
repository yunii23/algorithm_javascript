// 짝지어 제거하기

let s = "baabaa";
let answer = -1;

while(true) {
    let stack = [];
    let value = s;

    for(let i of s) {
        if(i == stack[stack.length - 1]) {
            stack.pop();
            continue;
        }

        stack.push(i)
    }

    s = stack.join("");

    if(value == s) {
        answer = 0;
        break;
    }
    else if(s.length == 0) {
        answer = 1;
        break;
    }
}

console.log(answer);