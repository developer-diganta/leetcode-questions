/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var helper = (idx,dp) => {
        if(idx===0) return nums[idx];
        if(idx<0) return 0;
        if(dp[idx]!==-1) return dp[idx];
        var l = nums[idx]+helper(idx-2,dp);
        var r = 0+helper(idx-1,dp);
        return dp[idx]=Math.max(l,r);
    }
    
    var dp = new Array(nums.length).fill(-1);
    // console.log(dp);
    return helper(nums.length-1,dp);
};