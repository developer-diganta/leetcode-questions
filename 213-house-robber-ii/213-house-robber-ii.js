/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1) return nums[0];
    var helper = (idx,dp,n) => {
        if(idx===0) return n[idx];
        if(idx<0) return 0;
        if(dp[idx]!==-1) return dp[idx];
        var l = n[idx]+helper(idx-2,dp,n);
        var r = 0+helper(idx-1,dp,n);
        return dp[idx]=Math.max(l,r);
    }
    var n1 = [];
    var n2 = [];
    for(var i=1;i<nums.length;i++){
        n1.push(nums[i]);
    }
    for(var i=0;i<nums.length-1;i++){
        n2.push(nums[i]);
    }
    var dp1 = new Array(n1.length).fill(-1);
    var dp2 = new Array(n2.length).fill(-1);
    // console.log(dp);
    return Math.max(helper(n1.length-1,dp1,n1),helper(n2.length-1,dp2,n2));
};