// 점프와 순간 이동

let n = 5;
let ans = 0;

while(n != 0) {
    if(n % 2 == 0) {
        n/=2;
    }
    else {
        n--;
        ans++;
    }
}

console.log(ans);