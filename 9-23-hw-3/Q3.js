
function combu(s){
    var buff = [];
    var res = [];
    for (i=0;i<s.length;i++){
        buff = [s[i]];
        var index=0;
        while(res[index]){
            buff.push(''+res[index]+s[i]);
            index++;
        }
        res = res.concat(buff);
    }
    return res;
    }
    
    
    console.log(combu('dog'));
