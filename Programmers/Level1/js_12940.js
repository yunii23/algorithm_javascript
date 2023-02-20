// 최대공약수와 최소공배수

let n = 3;
let m = 12;

let answer = [];

answer.push(gcd(n,m));
answer.push(lcm(n,m));

console.log(answer);

function gcd(n, m) {
    if(n % m == 0) return m;

    return gcd(m, n % m);
}

function lcm(n, m) {
    return n * m / gcd(n, m);
}