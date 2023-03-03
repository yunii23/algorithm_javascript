// [1차]다트게임

let dartResult = "1D2S3T*";
let answer = 0;

let arr = [...dartResult];

function score (s) {
    if(s == 'S') return 1;
    else if(s == 'D') return 2;
    else return 3;
}

let alphabet = /[a-zA-Z]/;

let last = 0;
let now = 0;
let check = 0;
let sum = 0;
for(let i=0; i<arr.length; i++) {

    if(alphabet.test(arr[i])) {
        check = Math.pow(check, score(arr[i]));
        console.log("check " + check + " arr[i] " + arr[i]);
        last = now;
        now = check;
        check = 0;
        sum += now;
        console.log("1번 last " + last + " now " + now + " sum " + sum);
    }
    else if (arr[i] == '*') {
        sum = sum - now - last;
        console.log("2번 sum " + sum);
        now *= 2;
        last *= 2;
        sum += now + last;
        console.log("2번 last " + last + " now " + now + " sum " + sum);
    }
    else if (arr[i] == '#') {
        sum -= now;
        now *= -1;
        sum += now;
        console.log("3번 last " + last + " now " + now + " sum " + sum);
    }
    else check += arr[i];
}

answer = sum;
console.log(answer);