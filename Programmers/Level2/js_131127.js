// 할인 행사

let want = ["banana", "apple", "rice", "pork", "pot"];
let number = [3, 2, 2, 2, 1];
let discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];

let answer = 0;

let wantNum = new Map();
for(let i=0; i<want.length; i++) {
    wantNum.set(want[i], number[i]);
}

//let sortedMap = [...wantNum].sort();

for(let i=0; i<=discount.length-10; i++) {

    let map = new Map;
    for(let j=i; j<i+10; j++) {
        if(map.get(discount[j])) map.set(discount[j], map.get(discount[j])+1);
        else map.set(discount[j], 1);
    }
    //console.log(map);

    //let sortedMap2 = [...map].sort();

    let count = 0;
    for(let [k, v] of map.entries()) {
        if(wantNum.get(k) != v) count ++;
    }
    if(count == 0) answer++;
}

console.log(answer);