const str="ilovejavascript";

function countLetter(str){
  let obj={};
  for(let i = 0 ;i < str.length;i++){
    if(obj[str[i]]===undefined){
      obj[str[i]]=1;
    }else{
      obj[str[i]]++
    }
  }
  console.log(obj);
}

countLetter(str);

//Or

function countLetter1(str){
let str1=str.split('').sort();
let ans=[];
var count=1;
for(let i =0;i<str1.length;i++){
    if(str1[i]==str1[i+1]){
        count++;
    }else{
        ans.push([str1[i],count])
        count=1;
    }
}
console.log(ans);
}

countLetter1(str)