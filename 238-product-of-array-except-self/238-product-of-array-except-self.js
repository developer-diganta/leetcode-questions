/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // var containsZero = false;
    var zeroCount = 0;
    var product = 1;
    for(var i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeroCount++;
        }
        else{
            product*=nums[i];
        }
    }
    var res = [];
    var c = 0;
        for(var i=0;i<nums.length;i++){
            if(nums[i]===0 && zeroCount>1){
                res.push(0);
            }
            else if(nums[i]===0 && zeroCount === 1){
                res.push(product);
            }
            else if(zeroCount){
                res.push(0)
            }
            else{
                res.push(Math.floor(product/nums[i]));
            }
    }
    return res;
};