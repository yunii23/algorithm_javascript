// 소수찾기

let n = 5;
let answer = 0;

function make_prime(num) {
    if(n < 2) return;

    prime[0] = prime[1] = true;

    for(let j=2; j<=Math.sqrt(num); j++) {
        if(prime[j] == true) continue;

        for(let k=j*j; k<prime.length; k=k+j) {
            prime[k] = true;
        }
    }
}

let prime = new Array(n+1).fill(false);

make_prime(n+1);

for(let i=0; i<=n; i++) {
    if(prime[i] == false) answer ++;
}

console.log(answer);