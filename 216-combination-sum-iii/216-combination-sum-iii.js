var combinationSum3 = function(k, n) {
    let res = [];
    
    function helper(nums, sum){
        // we have filled out all K options
        if(nums.length === k){
            // do the filled options sum up to n?
            if(sum === n)
                // we found a solution
                res.push(nums)
            return;
        }
        // look at the next number by checking last evaluated value
        let  i = nums.length > 0 ? nums[nums.length - 1] + 1 : 1;
        for(; i < 10; i++)
            helper([...nums, i], sum + i)
    }
    
    helper([], 0)
    
    return res;
};