/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var x = new Array(nums.length+1).fill(0);
    for(var i=0;i<nums.length;i++){
        x[nums[i]]++;
    }
    var ans1,ans2;
    for(var i=1;i<nums.length+1;i++){
        console.log(x[i])
        if(x[i]==2){
            ans1=i;
        }
        if(x[i]==0)
            ans2=i;
    }
    // if(!ans1)
    return [ans1,ans2];
};