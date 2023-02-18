// 자연수 뒤집어 배열로 만들기 

let n = 12345;

let answer = [];

while(n != 0) {
    answer.push(n % 10);
    n = parseInt(n / 10);
}

console.log(answer);