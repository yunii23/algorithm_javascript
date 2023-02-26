// 숫자 문자열과 영단어

let s = "23four5six7";
let answer = 0;

const arr = [
    { number: "zero", intt: 0 },
    { number: "one", intt: 1 },
    { number: "two", intt: 2 },
    { number: "three", intt: 3 },
    { number: "four", intt: 4 },
    { number: "five", intt: 5 },
    { number: "six", intt: 6 },
    { number: "seven", intt: 7 },
    { number: "eight", intt: 8 },
    { number: "nine", intt: 9 },
];

let alphabet = /[a-zA-Z]/;
let value = "";
let temp = "";
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (!alphabet.test(s[i])) temp += s[i];
    else if (alphabet.test(s[i])) value += s[i];

    const result = arr.find(isValue);

    if(result !== undefined) {
        temp += result.intt.toString();
        console.log(temp);
        value = "";
    }

}

function isValue(props) {
    if (props.number === value) return true;
}

answer = Number(temp);

console.log(answer);
