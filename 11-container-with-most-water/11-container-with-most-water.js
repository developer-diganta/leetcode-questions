/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        let result = 0;
    let [leftIdx, rightIdx] = [0, height.length - 1];
    
    while(leftIdx < rightIdx) {
        let [left, right] = [height[leftIdx], height[rightIdx]];
        let area = (rightIdx - leftIdx) * Math.min(left, right);
        result = Math.max(result, area);
        (left < right ? leftIdx++ : rightIdx--)
    }
    return result;
};