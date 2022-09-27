let string='The quick brown fox';

function vowelCount(str){
    let count=0;
    let vowel='aeiouAEIOU';
    for(let i =0;i<str.length;i++){
        if(vowel.indexOf(str[i])!==-1){
            count++;
        }
    }
return count;
}
console.log(vowelCount(string));
