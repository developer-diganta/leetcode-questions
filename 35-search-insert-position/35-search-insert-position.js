/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    s=0,e=nums.length-1;
    m=0
    while(s<=e){
        m=Math.floor((s+e)/2)
        if(nums[m] === target){
            return m;
        }
        else if(nums[m]<target){
            s=m+1;
        }
        else{
            e=m-1
        }
    }
    return s;
};