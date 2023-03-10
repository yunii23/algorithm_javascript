// 크레인 인형 뽑기 게임

let board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
let moves = [1, 2, 3, 4];

let answer = 0;

let peek = -1;
let basket = [];
let temp = [];

for(let i=0; i<board.length; i++) {
    let tempArr = [];
    
    board.map(el => {
        tempArr.push(el[i]);
    });
    temp.push(tempArr);
}

for(let i=0; i<moves.length; i++) {
    let col = temp[moves[i]-1];
    let a = col.find(el => el > 0);
    let idx = col.findIndex(el => el > 0);

    temp[moves[i]-1][idx] = 0;
    basket.push(a);

    if(basket.length > 1 && peek == a && peek != 0 && peek != undefined) {
        answer += 2;
        basket.pop();
        basket.pop();
        peek = basket[basket.length-1];
    } else {
        peek = a;
    }

}

console.log(answer);