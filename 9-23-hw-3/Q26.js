let s = 'abcabcbb';
let s1= 'cbbd'
let s2='a'
let s3='ac'
let s4='bb'
let s5='babad'
function longestSub(s){
    let right=0;
    let obj={};
    let count=0;
    let max=0;
    while(right<s.length){
        if(obj[s[right]]===undefined){
            obj[s[right]]=1;
            count++;
            max=Math.max(count,max);
            right++;
        }
        else{
            count=0;
            obj={}
        }
    }
return max;
}
 

console.log(longestSub(s));
console.log(longestSub(s1));
console.log(longestSub(s2));
console.log(longestSub(s3));
console.log(longestSub(s4));
console.log(longestSub(s5));

