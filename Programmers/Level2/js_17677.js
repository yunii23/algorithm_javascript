// [1차] 뉴스 클러스터링
// 참고 https://all-dev-kang.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-2018-KAKAO-%EB%89%B4%EC%8A%A4-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

let str1 = "E=M*C^2";
let str2 = "e=m*c^2";
let answer = 0;

str1 = str1.toUpperCase();
str2 = str2.toUpperCase();

let t = /^[A-Z]*$/;
let arr1 = [];
let arr2 = [];
let intersection = [];
for (let i = 0; i < str1.length; i++) {
    let temp = str1.substring(i, i + 2);
    //console.log(temp);
    if (t.test(temp) && temp.length == 2) arr1.push(str1.substring(i, i + 2));
    //console.log(arr1);
}
for (let i = 0; i < str2.length; i++) {
    let temp = str2.substring(i, i + 2);
    if (t.test(temp) && temp.length == 2) arr2.push(str2.substring(i, i + 2));
}

console.log(arr1);
console.log(arr2);

if (arr1.length == 0 && arr2.length == 0) answer = 65536;
else {
    
    arr1.sort();
    arr2.sort();

    if(JSON.stringify(arr1) == JSON.stringify(arr2)) answer = 65536;
    else {

        // arr1 기준으로 arr2에도 있는건 교집합, 그리고 arr2에서 제거
        arr1.forEach((item) => {
            let idx = arr2.indexOf(item);
            if(idx >= 0) {
                intersection.push(item);
                arr2.splice(idx, 1);
            }
        })
    
        answer = Math.floor(
            (intersection.length / (arr1.length + arr2.length)) * 65536
        );
    }
}


console.log(answer);
