// 가운데 글자 가져오기

let s = "qwer";

let answer = '';

if(s.length % 2 == 0) {
    let index = parseInt(s.length / 2 - 1);
    answer = s.substring(index, index + 2);
}
else {
    let index = parseInt(s.length / 2);
    answer = s.substring(index, index + 1);
}

console.log(answer);