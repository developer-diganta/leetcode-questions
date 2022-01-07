/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var search= function(nums,target,first){
    var s=0;
    var e=nums.length-1;
    var mid = 0;
    var ans = -1;
    while(s<=e){
        mid = Math.floor((s+e)/2);
        if(nums[mid]===target){
            if(first){
                ans=mid
                e=mid-1;
            }
            else{
                ans=mid
                s=mid+1
            }
        }
        else if(nums[mid]<target){
            s=mid+1;
        }
        else
            e=mid-1;
    }
    return ans;
}
var searchRange = function(nums, target) {
    var ans = [-1,-1];
    var first = search(nums,target,true);    
    var last = search(nums,target,false);
    ans[0]=first;    
    ans[1]=last;
    return ans;
};