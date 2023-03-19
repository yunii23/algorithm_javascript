// [1차] 캐시
// 참고 https://hwiyong.tistory.com/398

let cacheSize = 0;
let cities = ["A", "B", "A", "A", "A"];
let answer = 0;
let arr = [];

if(cacheSize == 0) answer = cities.length * 5;
else {
    for(let i of cities) {
        i = i.toLowerCase();
    
        // Miss 5
        if(arr.find(el => el == i) == undefined) {
            if(arr.length < cacheSize) {
                arr.push(i);
            }
            else {
                arr.shift();
                arr.push(i)
            }
            answer += 5;
        }
    
        // Hit 1
        else {
            arr.splice(arr.indexOf(i), 1);
            arr.push(i)
            answer ++;
        }
    
    }
    
}


console.log(answer);