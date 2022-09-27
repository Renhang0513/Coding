
let a={
    price:300
};
let b=true;
function c(num)
{
    return num*2;
}
let d=3;
let e="3";
let f;
let g=null;


function dataType(input){
if(typeof input !== 'object'){
    console.log(typeof input)
}else if(Array.isArray(input)===true){
    console.log("it is an Array")
}else if(input === null){
    console.log("it is a null");
}else{
    console.log("it is an object")
}
}
dataType(a)
dataType(b)
dataType(c)
dataType(d)
dataType(e)
dataType(f)
dataType(g)