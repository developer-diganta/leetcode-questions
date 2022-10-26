/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = {0:-1} // for the mod == 0 case 
    let sum = 0; 
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        let mod = sum % k; 
        if(map[mod] == null){
            map[mod] = i; 
        }else if(i - map[mod] >= 2){
            return true
        }
    }
    return false 
};