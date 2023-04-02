// [3차] 압축

let msg = "TOBEORNOTTOBEORTOBEORNOT";
let answer = [];

let map = new Map();

for (let i = 1; i <= 26; i++) {
    map.set(String.fromCharCode(64 + i), i);
}

let temp = msg[0];
msg = msg.substring(1, msg.length + 1);
let next = temp + msg[0];

if (msg.length == 0) {
    answer.push(map.get(temp));
} else {
    while (msg.length != 0) {
        if (map.get(temp) && map.get(next)) {
            temp = next;
            msg = msg.substring(1, msg.length + 1);
            next += msg[0];
        } else if (map.get(temp) && map.get(next) == undefined) {
            answer.push(map.get(temp));
            map.set(next, map.size + 1);
            temp = msg[0];
            msg = msg.substring(1, msg.length + 1);
            next = temp + msg[0];
        }

        if (msg[0] == undefined) answer.push(map.get(temp));
    }
}

console.log(answer);
