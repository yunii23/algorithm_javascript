// 성격 유형 검사하기

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];

let answer = '';

let obj = {
    "R": 0,
    "T": 0,
    "C": 0,
    "F": 0,
    "J": 0,
    "M": 0,
    "A": 0,
    "N": 0,
}

for(let i=0; i<survey.length; i++) {
    switch(choices[i]) {
        case 1: 
            obj[survey[i][0]] += 3;
            break;
        case 2: 
            obj[survey[i][0]] += 2;
            break;
        case 3: 
            obj[survey[i][0]] += 1;
            break;
        case 5: 
            obj[survey[i][1]] += 1;
            break;
        case 6: 
            obj[survey[i][1]] += 2;
            break;    
        case 7: 
            obj[survey[i][1]] += 3;
            break;
    }
}

if(obj["R"] > obj["T"]) answer += "R";
else if(obj["R"] < obj["T"]) answer += "T";
else answer += "R";

if(obj["C"] > obj["F"]) answer += "C";
else if(obj["C"] < obj["F"]) answer += "F";
else answer += "C";

if(obj["J"] > obj["M"]) answer += "J";
else if(obj["J"] < obj["M"]) answer += "M";
else answer += "J";

if(obj["A"] > obj["N"]) answer += "A";
else if(obj["A"] < obj["N"]) answer += "N";
else answer += "A";

console.log(answer);