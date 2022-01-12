/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var a = 0;
    var x = nums[0];
    while(a<nums.length){
        if(x===nums[a+1]){
            nums.splice(a+1,1);
        }
        else{
            a++;
            x=nums[a];
        }
    }
    return nums.length;
};