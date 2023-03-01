// 푸드 파이트 대회

let food = [1, 3, 4, 6];
let answer = '';

let value = '';
let reversed = '';

for(let i=1; i<food.length; i++) {
    
    if(food[i] >= 2) {
        console.log(i);
        for(let j=0; j<parseInt(food[i]/2); j++) {
            value += i.toString();
        } 
    }
}

reversed = value.split('').reverse().join('');

answer = value + '0' + reversed;
console.log(answer);