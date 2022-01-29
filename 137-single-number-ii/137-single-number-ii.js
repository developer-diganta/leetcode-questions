/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = new Array(32).fill(0);

    for(var i=0;i<nums.length;i++){
        var n = nums[i];
        for(var j=0;j<32;j++){
            if(n&(1<<j)){  
                res[j]++;
            }
        }
    }
    var ans = 0;
    for(var i=0;i<32;i++){
    if(res[i]%3===1){
        ans+=(1<<i);
    }
    }
    return ans;
};