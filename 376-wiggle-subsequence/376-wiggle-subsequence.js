/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let peaks = 1, valleys = 1;
    for(let g=1; g<nums.length; g++){
        if( nums[g] > nums[g-1] ) peaks = valleys + 1;
        else if( nums[g] < nums[g-1] ) valleys = peaks + 1;
    }
    return Math.max(peaks, valleys);
};