// 괄호 회전하기

let s = "}}}";
let answer = 0;


for(let i=0; i<s.length; i++) {
    s = s.substring(1) + s.substring(0, 1);
    //console.log(s);

    let stack = [];
    for(let j=0; j<s.length; j++) {
        stack.push(s[j]);
        //console.log(stack);
        
        if(j > 0) {
            switch (stack[stack.length-1]) {
                case ")":
                    if(stack[stack.length-2] == "(") {
                        stack.pop();
                        stack.pop();
                    }
                    break;
                case "]":
                    if(stack[stack.length-2] == "[") {
                        stack.pop();
                        stack.pop();
                    }
                    break;
                case "}":
                    if(stack[stack.length-2] == "{") {
                        stack.pop();
                        stack.pop();
                    }
                    break;
            }
        }
    }

    if(stack.length == 0) answer ++;
    console.log(stack.length);

}

console.log(answer);