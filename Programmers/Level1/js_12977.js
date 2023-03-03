// 소수 만들기

let nums = [1,2,7,6,4];
let answer = -1;
answer ++;

function prime(n) {
    if(n < 2) return;
    if(n == 2) return;

    for(let m=2; m<n; m++) {
        if(n % m == 0) return;
    }

    return answer ++;
}

for(let i=0; i<nums.length-2; i++) {
    for(let j=i+1; j<nums.length-1; j++) {
        for(let k=j+1; k<nums.length; k++) {
            let sum = nums[i] + nums[j] + nums[k];
            prime(sum);  
        }
    }
}

console.log(answer);