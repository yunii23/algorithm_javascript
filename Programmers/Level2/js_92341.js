// 주차 요금 계산

let fees = [180, 5000, 10, 600];
let records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
let answer = [];

let obj = {};
let map = new Map();

for(let i=0; i<records.length; i++) {
    let temp = records[i].split(" ");

    obj[temp[1]] += " " + temp[0] + " " + temp[2];
    
    if(map.has(temp[1]) == undefined) map.set(temp[1], 0);
}

//console.log(obj);

for(let key in obj) {
    let arr = obj[key].split(" ");
    arr.shift();
    //console.log(arr);

    let date = 0;
    let value = 0;
    for(let i=0; i<arr.length; i+=2) {
        let time = arr[i].split(":");
        //console.log(i);

        if(arr[i+1] == "IN") {
            date -= (time[0] * 60 * 60 * 1000) + (time[1] * 60 * 1000);
        }
        else {
            date += (time[0] * 60 * 60 * 1000) + (time[1] * 60 * 1000);
            value += parseInt(date / 1000 / 60)
            date = 0;
        }

        if(i+1 == arr.length-1 && arr[i+1] == "IN") {
            //console.log("들어와");
            date += (23 * 60 * 60 * 1000) + (59 * 60 * 1000);
            value += parseInt(date / 1000 / 60);
            //console.log(date);
            //console.log(value);
            break;
        }

        //console.log(date);
        //console.log(value);
    }

    if(fees[0] >= value) {
        map.set(key, fees[1]);
    }
    else {
        map.set(key, fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3])
        //obj[key] = fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3];
    }

    //console.log();
}

let asc = new Map([...map].sort());

//console.log(asc);

for(let v of asc.values()) {
    answer.push(v);
}

console.log(answer);