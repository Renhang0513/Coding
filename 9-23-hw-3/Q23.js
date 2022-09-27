const a='abacddbec';
function noRep(str){
    var count=0;
    let result='';
for(let i =0;i<str.length;i++){
 count=0;
    for(let j=0;j<str.length;j++){
        if(str[i]===str[j]){
            count++;
        }
    }

    if(count<2){
        result=str[i]
        break;
    }
}
return result;
}

console.log(noRep(a));    