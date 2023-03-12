// 개인정보 수집 유효기간

let today = "2020.01.01";
let terms = ["Z 3", "D 5"];
let privacies = ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"];
let answer = [];

let obj = [];
terms.forEach(el => {
    let e = el.split(" ");
    obj[e[0]] = Number(e[1]);
})

console.log(obj);
//console.log(typeof obj);

for(let i=0; i<privacies.length; i++) {
    let priArr = privacies[i].split(/\s|[.]/);
    console.log(priArr);

    if(priArr[2] == 1) {
        priArr[2] = 28;
        priArr[1] --;
    }else priArr[2] --;
    
    if(Number(priArr[1]) + Number(obj[priArr[3]]) > 12) {
        priArr[0] ++;
        priArr[1] = Number(priArr[1]) + obj[priArr[3]] - 12;
        while(priArr[1] > 12) {
            priArr[0] ++;
            priArr[1] = Number(priArr[1]) - 12;
        }
    }
    else priArr[1] = Number(priArr[1]) + obj[priArr[3]];

    console.log(priArr);
    priArr.pop();
    console.log(priArr.join("."));
    let date1 = new Date(today);
    let date2 = new Date(priArr.join("."));
    
    if(date1 > date2) answer.push(i+1);
}

console.log(answer);