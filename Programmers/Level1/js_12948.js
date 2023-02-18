// 핸드폰 번호 가리기

let phone_number = "027778888";
let s = String(phone_number);

let answer = '';

String.prototype.replaceAt = function(index, replacement) {
    if(index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0,index) + replacement + this.substring(index+1);
}

for(let i=0; i<s.length-4; i++) {
    s = s.replaceAt(i, "*");
}

console.log(s);