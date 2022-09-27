const str="thequickbrownfoxjumpsoverthelazydog";
function removeDup(str){
 
    var single='';
    for(let i = 0;i<str.length;i++){
    if(single.indexOf(str[i])==-1){
        single+=str[i]
    }
    }
    return single;
}


console.log(removeDup(str));

