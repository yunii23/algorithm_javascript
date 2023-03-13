// 이진 변환 반복하기

let s = "01110";
let answer = [];

let count = 0;
let value = 0;

let leng = 0;
let x = '';
let c = 0;
while(true) {
    leng = s.length;
    x = s.replace(/0/g, '');
    c = x.length;

    console.log("leng " + leng + " c " + c);
    s = c.toString(2);
    value = value + leng - c;
    count++;
    if(s == 1) break;
}

answer.push(count);
answer.push(value);

console.log(answer);