/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var l=0;
    var res= Number.MAX_SAFE_INTEGER;
    var s=0;
    for(var i=0;i<nums.length;i++){
        s=s+nums[i];
        while(s>=target){
            res=Math.min(res,i+1-l);
            s-=nums[l];
            l++;
        }
    }
    return res===Number.MAX_SAFE_INTEGER?0:res;
};