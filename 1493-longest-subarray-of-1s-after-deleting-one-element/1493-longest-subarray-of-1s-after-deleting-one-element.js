/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
        var i=0;
    var j=0;
    var k=1;
    while(i<nums.length){
        if(nums[i]===0) k--;
        if(k<0){
            if(nums[j]==0) k++;
            j++;
        }
        i++;
    }
    return i-j-1;
};