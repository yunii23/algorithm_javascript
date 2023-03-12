// 대충 만든 자판

let keymap = ["ABCE"];
let targets = ["ABDE"];
let answer = [];

// function searchKey(element) {
//     if(element.include)
// }

for(let i=0; i<targets.length; i++) {
    let targetArr = [...targets[i]];
    let count = 0;

    console.log(targets[i]);
    for(let j=0; j<targetArr.length; j++) {
        let num = [];

        for(let k=0; k<keymap.length; k++) {
            console.log(keymap[k]);
            let keyArr = [...keymap[k]];

            console.log("targetArr[j] " + targetArr[j]);
            console.log(keyArr.findIndex(el => el == targetArr[j]));

            let check = keyArr.findIndex(el => el == targetArr[j]);
            if(check > -1) num.push(check+1);
        }

        console.log(num);
        if(num.length == 0) {
            count = -1;
            break;
        }
        else {
            count += Math.min(...num);
            console.log("count " + count);
        }
        
    }
    if(count == -1) answer.push(-1);
    else answer.push(count);
    //answer.push(Math.min([...count]));
}

console.log(answer);