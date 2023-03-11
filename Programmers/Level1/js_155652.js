// 둘만의 암호

let s = "z";
let skip = "abcdefghij";
let index = 20;
let answer = '';

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

skip = [...skip];
s = [...s];

for(let i=0; i<skip.length; i++) {
    alphabet.splice(alphabet.findIndex(el => el == skip[i]), 1);
}

for(let i=0; i<s.length; i++) {
    let idx = alphabet.findIndex(el => el == s[i]);

    if(idx + index > alphabet.length-1) {
        idx = idx + index - alphabet.length;
        while (idx > alphabet.length-1) {
            idx = idx - alphabet.length;
        }
    }
    else idx += index

    s[i] = alphabet[idx];
}

answer = s.join("");

console.log(answer);