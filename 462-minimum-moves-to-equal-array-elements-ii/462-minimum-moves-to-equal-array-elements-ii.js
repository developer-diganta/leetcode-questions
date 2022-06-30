/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    var mid = nums[Math.floor(nums.length/2)];
    var ans = 0;
    // console.log(nums[])
    for(var i=0;i<nums.length;i++){
        ans=ans+Math.abs(mid-nums[i]);
    }
    return ans;
};