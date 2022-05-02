/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    var arr1 = [];
    var arr2=[];
    for(var i=0;i<nums.length;i++){
        if(nums[i]%2===0)
            arr1.push(nums[i]);
        else 
            arr2.push(nums[i]);
    }
    return arr1.concat(arr2);
};