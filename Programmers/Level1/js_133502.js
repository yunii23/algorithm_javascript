// 햄버거 만들기 

let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
let answer = 0;

let basket = [];
for(let i=0; i<ingredient.length; i++) {

    basket.push(ingredient[i]);
    console.log(basket);
    
    if(basket.length > 3 && basket[basket.length-1] == 1 && basket[basket.length-2] == 3 && basket[basket.length-3] == 2 && basket[basket.length-4] == 1) {
        answer ++;
        basket.splice(basket.length-4, 4);
        console.log(basket);
    }
}

console.log(answer);
