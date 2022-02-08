/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var tgSum = function(n,t,i) {
    if(t===0 && i===n.length){
        return 1;
    }
    if(i>=n.length){
        return 0;
    }
    return tgSum(n,t-n[i],i+1)+tgSum(n,t+n[i],i+1);
    
}
var findTargetSumWays = function(nums, target) {
    // console.log(tgSum(nums,target,0))
    return tgSum(nums,target,0)
};