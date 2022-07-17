/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (a) {
    let sum = 0;
    let ans = -Infinity;
    for (let i = 0; i < a.length; i++) {
        sum = Math.max(a[i], sum + a[i]);
        ans = Math.max(ans, sum)
    }
    return ans
};