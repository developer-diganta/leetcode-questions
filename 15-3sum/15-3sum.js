/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) i++; //Skip if we have already checked for this element before. This makes sure we record it at least once.
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        j++;
      }
      if (sum > 0) k--;
      if (sum < 0) j++;
    }
  }
  return results;
};