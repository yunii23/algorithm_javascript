// 콜라츠 추측

let num = 626331;

let answer = 0;

while(num != 1) {
    if(answer >= 500) {
        answer = -1;
        break;
    }

    if(num % 2 == 0) num = parseInt(num / 2);
    else num = parseInt((num * 3) + 1);
    answer ++;
}

console.log(answer);