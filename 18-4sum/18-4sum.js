/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    var ans = []
    for(var m = 0; m < nums.length - 3; m++){
        if(nums[m] > target && target > 0) return ans
        for(var i = m + 1; i < nums.length - 2; i++){
            for(var j = i + 1, k = nums.length - 1; j < k;){
                if(nums[m] + nums[i] + nums[j] + nums[k] === target){
                    ans.push([nums[m] , nums[i] , nums[j] , nums[k]])
                    j++
                    k--
                    var sign = false
                    while(nums[j] === nums[j - 1]){
                        if(j === k - 1) {
                            sign = true
                            break
                        }
                        j++
                    }
                    while(nums[k] === nums[k + 1]){
                        if(j === k - 1) {
                            sign = true
                            break
                        }
                        k--
                    }
                    if(sign){
                        break
                    }
                }else if(nums[m] + nums[i] + nums[j] + nums[k] < target){
                    j++
                }else{
                    k--
                }
            }
            if(nums[i + 1] === nums[i]) i++
            
            while(nums[i + 1] === nums[i] && i < nums.length - 2){
                i++
            }
        }
        while(nums[m + 1] === nums[m] && m < nums.length - 3){
            m++
        }
    }
    return ans
};