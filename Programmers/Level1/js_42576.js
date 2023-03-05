// 완주하지 못한 선수
// 참고 https://wooder2050.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-javascript-2ecb52443e8d

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];
let answer = '';

participant.sort();
completion.sort();

for(let i=0; i<participant.length; i++) {
    if(participant[i] !== completion[i]) {
        answer = participant[i];
        break;
    }
}

// ------------

// let mapp = new Map();

// for(let i=0; i<participant.length; i++) {
//     if(mapp.has(participant[i])) mapp.set(participant[i], mapp.get(participant[i]) + 1)
//     else mapp.set(participant[i], 0);
// }

// for(let i=0; i<completion.length; i++) {
//     if(mapp.has(completion[i])) mapp.set(completion[i], mapp.get(completion[i]) + 1);
// }
// console.log(mapp);

// for(let [k, v] of mapp) {
//     if(v == 0 || v > 1) {
//         answer = k;
//         break;
//     }
// }

// -------------

// for(let i=0; i<completion.length; i++) {
//     if(participant.includes(completion[i])) {
//         participant.splice(participant.indexOf(completion[i]), 1);
//     }
// }

// answer = participant[0];

console.log(answer);