const string='Web Development Tutorial';

function LongestLetter(str){
 let str_split= str.split(' ');
 let length=0;
 let word;
 for(let i =0;i<str_split.length;i++){
    if(str_split[i].length>length){
        length=str_split[i].length
        word=str_split[i];
    }
 }
 return word;
}

console.log(LongestLetter(string)
);