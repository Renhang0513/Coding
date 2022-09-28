let arr=[1,2,3]
function combu(s){
    var buff = [];
    var res = [];
    const ans=[];
    for (i=0;i<s.length;i++){
        buff = [s[i]];
        var index=0;
        while(res[index]){
            buff.push(''+res[index]+s[i]);
            index++;
        }
        res = res.concat(buff);
    }

    for(let i = 0;i < res.length;i ++){
        if(res[i].length===2){
            ans.push(res[i])
        }
    }
    return ans;
    }
    
    
    console.log(combu(arr));
