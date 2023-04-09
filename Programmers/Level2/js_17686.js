// 파일명 정렬
// 참고 https://after-newmoon.tistory.com/82

let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
let answer = [];

let num = /[0-9]+/g;
let notNum = /[^0-9]+/g;

answer = files.sort((a, b) => {
    let headA = a.match(notNum)[0].toLowerCase();
    let headB = b.match(notNum)[0].toLowerCase();
    //console.log("headA " + headA + " headB " + headB);

    if(headA < headB) return -1;
    else if (headA > headB) return 1;
    else {
        let numberA = a.match(num)[0].replace(/^0+/, "");
        let numberB = b.match(num)[0].replace(/^0+/, "");

        return numberA - numberB;
    }
});

console.log(answer);

