/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var i=0;
    while(i<nums.length){
        if(nums[i]!==i+1){
            var c = nums[i] - 1;
            if(nums[i]!==nums[c]){
                var t = nums[i];
                nums[i] = nums[c];
                nums[c] = t;
            }
            else{
                return nums[i];
            }
        }else{
            i++;
        }
    }
    return -1;
};