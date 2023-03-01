// 가장 가까운 같은 글자

let s = "foobar";
let answer = [];

let arr = [...s];
let value = [];

for(let i=0; i<arr.length; i++) {

    let max = 0;
    if(value.includes(arr[i])) {
        for(let j=0; j<=i; j++) {
            if(arr[i] == value[j]) {
                max = j;
            }
        }
        value.push(arr[i]);
        answer.push(i - max);
    }
    else {
        value.push(arr[i]);
        answer.push(-1);
    }
}

console.log(answer);