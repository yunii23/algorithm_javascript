// n개의 최소공배수

let arr = [2,6,8,14];
let answer = 0;

function gcd (a, b) {
    if(a % b == 0) return b;

    return gcd(b, a%b);
}

function lcm (c, d) {
    return c * d / gcd(c, d);
}

answer = lcm(arr[0], arr[1]);
for(let i=2; i<arr.length; i++) {
    answer = lcm(answer, arr[i])
    
}

console.log(answer);