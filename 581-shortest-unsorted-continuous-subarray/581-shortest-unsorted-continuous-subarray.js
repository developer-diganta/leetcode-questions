/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
	var low = 0,
		high = nums.length - 1;

	while (low + 1 <= high && nums[low] <= nums[low + 1]) {
		low++;
	}

	if (low === high) return 0;

	while (nums[high] >= nums[high - 1]) {
		high--;
	}

	let [min, max] = findMinAndMax(nums, low, high);

	while (nums[low - 1] > min && low > 0) low--;
	while (nums[high + 1] < max && high < nums.length) high++;

	return high - low + 1;
};

const findMinAndMax = (nums, low, high) => {
	if (high < low) {
		let temp = low;
		low = high;
		high = temp;
	}

	let max = -Infinity,
		min = Infinity;

	for (var i = low; i <= high; i++) {
		let num = nums[i];

		max = Math.max(max, num);
		min = Math.min(min, num);
	}

	return [min, max];
};