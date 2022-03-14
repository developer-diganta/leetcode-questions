/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
           var i=0;

    while(i<nums.length){
        var c = nums[i] - 1;
        if(nums[i]>0 && nums[i]<=nums.length && nums[i]!==nums[c]){
            var t = nums[i];
            nums[i] = nums[c];
            nums[c] = t;
        }else{
            i++;
        }
    }
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==i+1) return i+1;
    }
    return nums.length + 1;
};