// 타겟 넘버
// 참고자료 확인했음

let numbers = [1, 1, 1, 1, 1];
let target = 3;
let answer = 0;


dfs(0, 0);

function dfs(dp, sum) {
    if(dp == numbers.length) {
        if(sum == target) {
            answer++;
        }
        return;
    }

    dfs(dp + 1, sum + numbers[dp] * -1);
    dfs(dp + 1, sum + numbers[dp])

}

console.log(answer);