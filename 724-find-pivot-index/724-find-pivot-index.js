/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0)
    
    let leftSideSum = 0
    
    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index]
        const rightSideSum = totalSum - leftSideSum - currentNum
        
        if (leftSideSum === rightSideSum) return index
        
        leftSideSum += currentNum
    }
    
    return -1
};