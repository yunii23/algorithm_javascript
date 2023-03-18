// 카펫

let brown = 4004;
let yellow = 999999;
let answer = [];

for(let height=3; height<=brown; height++) {
    let sum = brown + yellow;
    
    if(sum % height == 0) {
        let width = parseInt(sum / height);

        if((width-2)*(height-2) == yellow) {
            answer.push(width);
            answer.push(height);
            break;
        }
    }
}

console.log(answer);