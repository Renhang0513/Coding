const countries=["Australia", "Germany", "United States of America"]
function longestName(list){
    let count=0;
    let country=0;
for(let i =0;i<list.length;i++){
    if(list[i].length>count){
        count=list[i].length;
        country=i;
    }
}
return list[country];
}
console.log(longestName(countries)); 