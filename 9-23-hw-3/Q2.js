const str='aba'
const str1='abc'
function palindromeCheck(str){
let str1=str;
if(str1.split('').reverse().join('')===str){
    console.log('it is palindrome');
}else{
    console.log('it is not a palindrome');
}
}
palindromeCheck(str)
palindromeCheck(str1)
