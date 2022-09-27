const x =[1,2,3,4,5]
// function sort1(x,y){
//     return x-y;
// }

function second(Array){
let Array_sort=Array.sort((x,y)=>x-y)
let array_noRepeat=[];

for(let i =0;i<Array_sort.length;i++){
   if(Array_sort[i]!==Array_sort[i+1]){
    array_noRepeat.push(Array_sort[i])
   }
}

return [array_noRepeat[1],array_noRepeat[array_noRepeat.length-2]];
}
console.log(second(x));


