/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    var i=0;
    var j=0;
    while(i<nums.length){
        if(nums[i]===0) k--;
        if(k<0){
            if(nums[j]==0) k++;
            j++;
        }
        i++;
    }
    return i-j;
};