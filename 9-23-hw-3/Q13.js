function factor(num){
let ans=[];
for(let i=0;i<num;i++){
   if(num % i ===0){
    ans.push(i)
   }
}
ans.push(num)
return ans;
}

console.log(factor(15));
console.log(factor(16));
console.log(factor(17));
console.log(factor(0));
console.log(factor(1));
console.log(factor(2));

