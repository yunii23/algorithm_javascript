// k진수에서 소수 개수 구하기
// https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-k%EC%A7%84%EC%88%98%EC%97%90%EC%84%9C-%EC%86%8C%EC%88%98-%EA%B0%9C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0-JavaScript
// 시간초과 문제 해결위해서 참고

let n = 437674;
let k = 3;
let answer = 0;

let change = n.toString(k);

let arr = change.split("0");

for(let i=0; i<arr.length; i++) {
    if(make_prime(Number(arr[i]))) answer ++;
}

function make_prime(num) {

    if(num < 2) {
        return false;
    }

    for(let j=2; j<=Math.sqrt(num); j++) {
        if(num % j == 0) {
            return false;
        } 
    }

    return true;
}


console.log(answer);