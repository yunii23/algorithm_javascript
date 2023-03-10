// 카드 뭉치

let cards1 = ["i", "drink", "water"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];

let answer = '';

let result = '';
let card1Shift = cards1.shift();
let card2Shift = cards2.shift();

for(let i = 0; i<goal.length; i++) {
        
    if(goal[i] == card1Shift) {
        result = result + card1Shift + ' ';
        card1Shift = cards1.shift();
    }
    else if(goal[i] == card2Shift) {
        result = result + card2Shift + ' ';
        card2Shift = cards2.shift();
    }
    else {
        break;
    }
    console.log(result);
}

if(result.trim() == goal.join(" ")) answer = "Yes";
else answer = "No";

console.log(answer);