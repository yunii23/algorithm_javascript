// 키패드 누르기

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
let answer = '';

let arr = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2]
}

let leftP = "*";
let rightP = "#";

for(let i=0; i<numbers.length; i++) {
    console.log("numbers[i] " + numbers[i]);
    console.log("leftP " + leftP + " rightP " + rightP);
    
    if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
        answer += 'L';
        leftP = numbers[i];
    } 
    else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
        answer += 'R';
        rightP = numbers[i];
    }
    else {
        let leftD = Math.abs(arr[numbers[i]][0] - arr[leftP][0]) + Math.abs(arr[numbers[i]][1] - arr[leftP][1]);
        let rightD = Math.abs(arr[numbers[i]][0] - arr[rightP][0]) + Math.abs(arr[numbers[i]][1] - arr[rightP][1]);
        console.log("leftD " + leftD + " rightD " + rightD);

        if(leftD < rightD) {
            answer += 'L';
            leftP = numbers[i];
        }
        else if (leftD > rightD) {
            answer += 'R';
            rightP = numbers[i];
        }
        else {
            if(hand == 'right') {
                answer += 'R';
                rightP = numbers[i];
            }
            else {
                answer += 'L';
                leftP = numbers[i];
            }
        }
    }
    
    console.log(answer);
    console.log();
}

console.log(answer);

