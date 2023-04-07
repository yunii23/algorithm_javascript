// 스킬트리

let skill = "CBD";
let skill_trees = ["C", "D", "CB", "BDA"];
let answer = 0;

let arr = [];
let chk = [];

for(let i=0; i<skill.length; i++) {
    chk.push(skill[i]);
}

for(let i=0; i<skill.length; i++) {
    arr.push(skill.substring(0, i+1));
}

console.log(arr);
console.log(chk);

for(let i=0; i<skill_trees.length; i++) {
    let temp = skill_trees[i].split("");

    let j = 0;
    while(j != temp.length) {

        if(chk.find(el => el == temp[j]) == undefined) {
            temp.splice(j, 1);
        } 
        else j++;
        
        console.log(temp);
    }
    
    skill_trees[i] = temp.join("");

    if(skill_trees[i] == '') answer++;
    else {
        let result = arr.find(el => el == skill_trees[i]);

        if(result != undefined) answer++;
    }

}

console.log(skill_trees);

console.log(answer);