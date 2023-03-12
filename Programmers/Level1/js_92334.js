// 신고 결과 받기

let id_list = ["con", "ryan"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 3;
let answer = [];

let arr = [];

let obj = {};

let set = new Set(report);
let uniqueReport = [...set];

for(let i=0; i<id_list.length; i++) {
    obj[id_list[i]] = {reported: [], charge: 0, notifi: 0};
}

for(let i=0; i<uniqueReport.length; i++) {
    let temp = uniqueReport[i].split(" ");
    obj[temp[0]].reported.push(temp[1]);
    obj[temp[1]].charge ++;
}

for(let i=0; i<id_list.length; i++) {
    if(obj[id_list[i]].charge >= k) {
        
        for(let key in obj) {
            console.log(obj[key].reported);
            let f = obj[key].reported.find(el => el == id_list[i]);
            if(f != undefined) {
                obj[key].notifi ++;
            }
            console.log(f);
        }
    }
}

for(let i=0; i<id_list.length; i++) {
    answer.push(obj[id_list[i]].notifi);
}

console.log(obj);
console.log(answer);

// for(let i=0; i<id_list.length; i++) {

//     let value = ['', ''];
//     value.unshift(id_list[i]);
//     arr.push(value)
// }

// console.log(arr);

// for(let i=0; i<report.length; i++) {
//     let temp = report[i].split("");

//     if()
// }