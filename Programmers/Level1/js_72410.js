// 신규 아이디 추천

let new_id = "abcdefghijklmn.p";
let answer = '';

let num2 = /[^.\-_a-z0-9]/gim;
let num3 = /[.]{2,}/gim;
new_id = new_id.toLowerCase().replace(num2, '').replace(num3, '.').replace(/^[.]/gim, '').replace(/[.]$/, '');

if(new_id.length == 0) new_id = 'a';

if(new_id.length > 15) {
    new_id = new_id.substring(0, 15).replace(/[.]$/, '');
}

if(new_id.length <= 2) {
    let leg = 3 - new_id.length;
    new_id += new_id[new_id.length-1].repeat(leg);
}

console.log(new_id);