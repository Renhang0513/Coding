const array1=[1,2,3,4,5,6,7];

function returnLarger(array,num){
    const newArray=[];
for(let i = 0;i<array1.length;i++){
    if(array[i]>num){
        newArray.push(array[i])
    }
}
return newArray;
}

console.log(returnLarger(array1,0));
