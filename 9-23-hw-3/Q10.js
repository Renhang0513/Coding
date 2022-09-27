function matrix(size){
    for(let i=0;i<size;i++){
        console.log("--------")
        for(let j = 0;j<size;j++){
            if(i===j){
                console.log('1')
            }
            else{
                console.log("0")
            }
        }
    }
}
matrix(3)