/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
	var changes = 0;
	for (var i = 0; i < nums.length-1; i++) {
		if (nums[i+1] < nums[i]) {
            if (nums[i-1] !== undefined && nums[i-1] > nums[i+1]) {
                if (nums[i+2] && nums[i] > nums[i+2]) {
                    return false;
                }
            }
			changes++;
			if (changes > 1) {
				return false;
			}
		}
	}
	return true;
};