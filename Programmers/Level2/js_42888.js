// 오픈채팅방

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
let answer = [];

let obj = {};
let map = new Map();

for(let i=0; i<record.length; i++) {
    let temp = record[i].split(" ");
    if(temp[0] == "Leave") {
        obj[temp[1]] += "," + temp[0];
    } else {
        obj[temp[1]] += "," + temp[0] + " " + temp[2];
    }
}

console.log(obj);

for(let v in obj) {
    let temp2 = obj[v].split(",");
    temp2.shift();

    for(let i=temp2.length-1; i>=0; i--) {
        let temp3 = temp2[i].split(" ");

        if(temp3[0] == "Enter" || temp3[0] == "Change") {
            map.set(v, temp3[1]);
            break;        
        }
    }
}

console.log(map);

for(let i=0; i<record.length; i++) {
    let value = record[i].split(" ");

    if(value[0] == "Enter") {
        answer.push(map.get(value[1]) + "님이 들어왔습니다.");
    }
    else if(value[0] == "Leave") {
        answer.push(map.get(value[1]) + "님이 나갔습니다.")
    }
}

console.log(answer);