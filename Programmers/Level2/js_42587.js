// 프린터

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;
let answer = 0;

let result = priorities[location];
console.log(result);
while (true) {
    let peek = priorities.shift(0);
    let temp = priorities.filter((el) => el > peek);
    console.log(peek + " " + temp);

    if (temp.length != 0) {
        //console.log(priorities);
        priorities.push(peek);
    } else {
        answer++;
        console.log(priorities);

        if (location == 0 && result == peek) {
            break;
        }
    }

    location--;
    if (location < 0) {
        location = priorities.length - 1;
    }
}

console.log(answer);
