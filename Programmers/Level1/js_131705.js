// 삼총사

let number = [-1, 1, -1, 1];
let answer = 0;

for(let i=0; i<number.length; i++) {
    let result = 0;

    for(let j=i+1; j<number.length; j++) {
        for(let k=j+1; k<number.length; k++) {
            result = number[i] + number[j] + number[k];
            
            if(result == 0) answer ++;
        }
    }
}

console.log(answer);