// H-index

let citations = [6, 5, 5, 5, 3, 2, 1, 0];
let answer = 0;

citations.sort((c1, c2) => c2 - c1);

for(let i=0; i<citations.length; i++) {
    console.log(i + " "+ citations[i]);

    if(i >= citations[i]) {
        answer = i;
        break;
    }
}

if(answer == 0 && citations[0] == 0) answer = 0;
else if (answer == 0 && citations[0] != 0) answer = citations.length

console.log(answer);
