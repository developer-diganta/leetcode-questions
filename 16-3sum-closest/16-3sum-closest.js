/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a-b});
    let ans;
    ans = nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let left=i+1,right=nums.length-1;
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right];
            let diff = Math.abs(target-sum);
            if(diff<Math.abs(target-ans)){
                ans = sum;
            }
            if(sum===target){
                return ans;
            }else if(sum<target){
                left++;
            }else{
                right--;
            }
        }
    }
    return ans;
};