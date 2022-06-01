/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var x = [];
    x.push(nums[0]);
    for(var i=1;i<nums.length;i++) x[i]=nums[i]+x[i-1];
    return x;
};