// 옹알이 (2)
// 참고 https://velog.io/@rkio/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Javascript-%EC%98%B9%EC%95%8C%EC%9D%B4-2

let babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
let answer = 0;

let arr = ["aya", "ye", "woo", "ma"];

for(let i=0; i<babbling.length; i++) {
    let temp = babbling[i];

    for(let j=0; j<arr.length; j++) {
        if(temp.includes(arr[j].repeat(2))) break;

        temp = temp.split(arr[j]).join(" ");
        console.log(temp);
    }

    if(temp.split(" ").join("").length == 0) answer ++;
    console.log(temp);
}

console.log(answer);