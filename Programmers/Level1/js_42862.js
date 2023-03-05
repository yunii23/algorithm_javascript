// 체육복

let n = 3;
let lost = [3];
let reserve = [1];

let answer = 0;

let arr = new Array(n).fill(0);
for(let i=0; i<lost.length; i++) {
    arr[lost[i]-1] --;
}
for(let i=0; i<reserve.length; i++) {
    arr[reserve[i]-1] ++;
}

for(let i=0; i<arr.length; i++) {
    if(i == 0) {
        if(arr[0] == -1 && arr[1] == 1) {
            arr[0] ++;
            arr[1] --;
        }
    } 
    else if(i == arr.length-1) {
        if (arr[arr.length-1] == -1 && arr[arr.length-2] == 1) {
            arr[arr.length-1] ++;
            arr[arr.length-2] --;
        }
    }
    else {
        if(arr[i] == -1 && arr[i-1] == 1) {
            arr[i] ++;
            arr[i-1] --;
        } else if(arr[i] == -1 && arr[i+1] == 1) {
            arr[i] ++;
            arr[i+1] --;
        }
    }
}

console.log(arr);

answer = arr.filter(i => i >= 0).length;
console.log(answer);