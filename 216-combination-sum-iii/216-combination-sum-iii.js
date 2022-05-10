var combinationSum3 = function(k, n) {
    let res = [];
    function helper(nums, sum){
        if(nums.length === k){
            if(sum === n)
                res.push(nums)
            return;
        }
        let  i = nums.length > 0 ? nums[nums.length - 1] + 1 : 1;
        for(; i < 10; i++)
            helper([...nums, i], sum + i)
    }
    
    helper([], 0)
    
    return res;
};