/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let map = {}
    let len = nums.length / 2
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (map[el]) {
            map[el] = map[el] + 1
        } else {
            map[el] = 1
        }
    }
    for (i in map) {
        if (map[i] > len) return i
    }
};