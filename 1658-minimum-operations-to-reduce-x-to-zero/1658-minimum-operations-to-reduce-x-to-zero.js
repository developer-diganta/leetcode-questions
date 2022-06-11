var minOperations = function(nums, x) {
 const target = nums.reduce((a, b) => a + b, 0)-x
 if (target==0){return nums.length}
 if(target<0){return -1}
    let l = 0;
    let r = 0;
    let windowSum=0
    maxlength=-1
    while(r<nums.length){
        windowSum += nums[r]
        r++
        while(windowSum>=target){
            if(windowSum==target){
                maxlength=Math.max(maxlength,r-l)   
            }
            windowSum -= nums[l]
            l++
        }
    }
    
    return maxlength==-1?-1:nums.length-maxlength
};