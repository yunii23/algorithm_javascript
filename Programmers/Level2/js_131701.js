// 연속 부분 수열 합의 개수

let elements = [7,9,1,1,4];
let answer = 0;

let arr = [];
let len = 1;
while(len <= elements.length) {
    
    // i는 시작 인덱스
    for(let i=0; i<elements.length; i++) {
        let sum = 0;
        
        let j = i;
        let k = 0;
        while(k < len) {
            sum += elements[j];
            j++;

            if(j >= elements.length) j = 0;
            k++;
        }

        arr.push(sum)
    }

    len ++;
} 

console.log(arr);

let set = new Set(arr);
answer = [...set]

console.log(answer);
console.log(answer.length);