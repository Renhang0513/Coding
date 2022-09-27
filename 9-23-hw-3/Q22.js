
let str='microsoft.com'

function countLetter(string,word){
let count=0;
for (let i =0;i<string.length;i++){
    if(string[i]===word){
        count++;
    }
}
return count;
}
console.log(countLetter(str,'o'));