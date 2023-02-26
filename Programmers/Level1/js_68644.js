// 두개 뽑아서 더하기

let numbers = [2,1,3,4,1];

let answer = [];

let arr = [];
for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
        arr.push(numbers[i] + numbers[j]);
    }
}

let set = new Set(arr);
answer = [...set];
answer.sort((c1, c2) => c1 - c2);

console.log(answer);