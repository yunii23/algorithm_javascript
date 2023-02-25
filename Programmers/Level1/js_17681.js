// 비밀지도

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = 	[30, 1, 21, 17, 28];
let answer = [];

for(let i=0; i<n; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, '0');
    arr2[i] = arr2[i].toString(2).padStart(n, '0');

    let sum = '';
    for(let j=0; j<n; j++) {
        if(arr1[i][j] == 1 || arr2[i][j] == 1) {
            sum += '#'
        }
        else sum += ' ';
    }

    answer.push(sum);

}
console.log(answer);
