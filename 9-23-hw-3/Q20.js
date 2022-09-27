let list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function listOfRandoms(length){
    let randoms=[];
for(i=0;i<length;i++){
randoms.push(list[Math.floor(Math.random()*list.length)])
}
return randoms;
}

console.log(listOfRandoms(10));