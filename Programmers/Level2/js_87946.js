// 피로도
// https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%94%BC%EB%A1%9C%EB%8F%84-JavaScript

let k = 80;
let dungeons = [[80,20],[50,40],[30,10]];
let answer = 0;

let visit = new Array(dungeons.length).fill(false);
let result = [];

search(0, k);

function search(dp, kk) {
    result.push(dp);

    for(let i=0; i<dungeons.length; i++) {
        //let chk = 0;
        console.log(visit);
        if(visit[i] == false && kk >= dungeons[i][0]) {
            visit[i] = true;
            console.log(dungeons[i]);
            search(dp+1, kk - dungeons[i][1]);
            visit[i] = false;
        }
    }
}

console.log(result);

answer = Math.max(...result)

console.log(answer);