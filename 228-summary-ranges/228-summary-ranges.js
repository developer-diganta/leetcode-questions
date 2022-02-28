/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
  var res = [];
  for (var i = 0, left = nums[0]; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
      left = nums[i + 1];
    }
  }
  return res;    
};