const array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function binary(array,target){
let left=0;
let right=array.length-1

while(left<=right){
    let mid=left+Math.floor((right-left)/2)
    if(array[mid]===target){
        return mid;
    }else if(mid<target){
        left=mid+1
        // console.log("left change");
    }else{
        right=mid-1
        // console.log("right change");
    }
}
return -1
}

console.log(binary(array,12));  




