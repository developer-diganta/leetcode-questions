/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var x = -Infinity;
    var t=0;
    for(var i=0;i<nums.length;i++){
        // t=t+nums[i];
        t=Math.max(nums[i],nums[i]+t);
        x=Math.max(x,t);
    }
    return x;
};