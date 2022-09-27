function perfectNum(num){
   var temp=0;
    for(let i=0;i<=num/2;i++){
        if(num%i===0){
            temp+=i;
        }
    }
    if(temp==num){
        console.log("it is a perfect number")
    }
    else{
        console.log('it is not a perfect number')
    }
}
perfectNum(10)
perfectNum(28)