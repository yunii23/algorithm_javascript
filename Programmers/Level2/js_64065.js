// 튜플
// 참고 https://jongbeom-dev.tistory.com/153

let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
let answer = [];

let temp = s.replace("{{", "").replace("}}", "").split("},{");

let setList = [];
for(let i=0; i<temp.length; i++) {
    setList.push(temp[i].split(","));
}

setList.sort((c1, c2) => c1.length - c2.length)
console.log(setList);

answer.push(parseInt(setList[0][0]));
for(let i=1; i<setList.length; i++) {
    let el = getEl(setList[i], answer);
    answer.push(el);
}

console.log(answer);

function getEl(set, answer) {
    // 인자로 setList[i] 한 개의 숫자만 줘서 answer의 모든 수와 비교
    for(let i=0; i<set.length; i++) {
        for(let j=0; j<answer.length; j++) {
            set = set.filter((ele) => ele != answer[j]); 
        }
    }
    return parseInt(set[0])
}