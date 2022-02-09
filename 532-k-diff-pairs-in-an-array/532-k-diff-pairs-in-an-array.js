/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            ans += binarySearch(nums, i + 1, nums.length - 1, nums[i] + k);
        }
    }
    return ans;
};

var binarySearch = function(nums, start, end, target) {
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return true;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return false;
};