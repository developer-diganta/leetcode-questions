/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
        nums.sort((a, b) => a - b);
    let val = original;
    
    for (const num of nums) {
        if (num === val) {
            val *= 2;
        }
    }
    
    return val;
};