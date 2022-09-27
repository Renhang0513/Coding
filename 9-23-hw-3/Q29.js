

const func1 = function xyz(str){
return 123;
}
const func2 = function abc(str){
    return 456;
}

function getFunctionName(func){
console.log(func.name);
}

getFunctionName(func1)
getFunctionName(func2)