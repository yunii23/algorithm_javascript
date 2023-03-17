// 영어 끝말잇기

let n = 3;
let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

let answer = [];

let myNum = new Array(n).fill(0);
let exist = [];

let j = 0;
for(let i=0; i<words.length; i++) {
    if(j % n == 0) j = 0;

    if(i > 0 && words[i-1][words[i-1].length-1] != words[i][0] || undefined != exist.find(el => el == words[i]) || words[i].length == 1) {
        answer.push(j+1);
        answer.push(myNum[j]+1);
        break;
    }
    else {
        exist.push(words[i]);
        myNum[j] ++;
    }

    j++;
}

if(answer.length == 0) {
    answer.push(0);
    answer.push(0);
}

console.log(answer);