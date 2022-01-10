/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((x)=>nums.reduce((t,y)=>y<x?t+1:t,0))

};