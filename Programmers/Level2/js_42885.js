// 구명보트

let people = [100, 500, 500, 900, 950];
let limit = 1000;
let answer = 0;

people.sort((c1, c2) => c2 - c1);

let j = people.length - 1;
let i = 0;

while (i < j) {
    let sum = people[i] + people[j];
    console.log(sum);
    if(sum > limit) i++;
    else {
        i++;
        j--;
    }
    answer++;
}

if(i == j) answer ++;
// for(let i=0; i<people.length; i++) {
//     let sum = 0;

//     sum += people[i];
//     let idx = people.findIndex(el => el <= limit-sum)

//     j--;
// }

// while(people.length != 0) {
//     let sum = 0;
//     for(let i=people.length-1; i>=0; i--) {e
//         sum += people[i];
//         people.splice(i, 1);

//         let idx = people.findIndex(el => el <= limit-sum)
//         if(idx == -1) {
//             sum = 0;
//             break;
//         }
//         else {
//             people.splice(idx, 1);
//             break;
//         }
//     }

//     answer++;

// }

console.log(answer);
