// const companies = [
//     {name:"Company One", category: "Finaance", start: 1981, end: 2003},
//     {name:"Company Two", category: "Retail", start: 1992, end: 2008},
//     {name:"Company Three", category: "Auto", start: 1999, end: 2007},
//     {name:"Company Four", category: "Retail", start: 1989, end: 2010},
//     {name:"Company Five", category: "Tech", start: 2009, end: 2014},
//     {name:"Company Six", category: "Finaance", start: 1987, end: 2010},
//     {name:"Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name:"Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name:"Company Nine", category: "Retail", start: 1981, end: 1989},
// ];
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies.name[i]);
// }

// let canDrink = [];
// let cantDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }else{
//        cantDrink.push(ages[i]); 
//     }
// }
// console.log(canDrink);
// console.log(cantDrink);

const canDrink = ages.filter(function(age){
    if(age >=21){
        return true;
    }
})
console.log(canDrink);
