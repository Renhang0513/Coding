

const nums = [1,2,3]

function subsets(nums){
    const result=[];
    const ans=[];
    function dfs(i,nums,slate){
        if(i === nums.length){
            result.push(slate.slice());
            return;
        }
        dfs(i + 1, nums,slate);
        slate.push(nums[i]);
        dfs(i+1, nums,slate);
        slate.pop();
    }
    dfs(0,nums,[]);

    return result; 
}

console.log(subsets(nums));
