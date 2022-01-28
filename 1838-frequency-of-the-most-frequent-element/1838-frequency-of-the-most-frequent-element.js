/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
       nums.sort((a, b) => a - b)
        const map = new Map()
        for (const val of nums.values()) {
            map.set(val, 1 + (map.get(val) || 0))
        }
        
        const len = nums.length 
        const sumSF = new Array(len)
        sumSF[-1] = 0
        for (const [i, val] of nums.entries()) {
            sumSF[i] = val + sumSF[-1 + i]
        }
                
        
        let result = 0
        for (const [val, count] of map.entries()) {
            let low = 0, high = -1 + len, firstIndex, outcome = count
            // find index: high of val
            while (low < high) {
                const mid = Math.floor((low + high) / 2)
                const midVal = nums[mid]
                if (midVal >= val)  high = mid
                else low = 1 + mid
            }
            
            firstIndex = high
            if (firstIndex !== 0) {
                low = 0
                high = -1 + firstIndex
                const coverThreshold = val - nums[high]
                if (coverThreshold <= k) {
                    while (low < high) {
                        const mid = Math.floor((low + high) / 2)
                        const partSum = sumSF[-1 + firstIndex] - sumSF[-1 + mid]
                        const partExpectedSum = val * ((firstIndex - 1) - (mid - 1))
                        const needCount = partExpectedSum - partSum
                        if (needCount <= k) high = mid
                        else low = 1 + mid
                    }
                    
                    const addMe = firstIndex - high
                    outcome += addMe
                }
            }
            
            result = Math.max(result, outcome)
        }
        
        
        return result
};