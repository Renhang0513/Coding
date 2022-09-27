let letters='the quick brown fox' 
function sortLetters(str){
let ans=str.split(' ');
let ans1=[];
for(let i =0;i<ans.length;i++){
    ans1.push(ans[i][0].toUpperCase()+ans[i].slice(1))
}
return ans1.join(' ')
}
console.log(sortLetters(letters)
);



