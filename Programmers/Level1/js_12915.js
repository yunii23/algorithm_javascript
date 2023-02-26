// 문자열 내 마음대로 정렬하기

let strings = ["abce", "abcd", "cdx"];
let n = 2;

let answer = [];

strings.sort((a, b) => {
    if(a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }
});

answer = strings;
console.log(answer);