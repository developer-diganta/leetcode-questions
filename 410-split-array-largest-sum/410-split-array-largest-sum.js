/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
     let s=0;
    let e=0;
    for(var i=0;i<nums.length;i++){
        s=Math.max(s,nums[i]);//case 1 finding max of all elements i.e. array is split into 1 piece each
        e+=nums[i];//case 2, adding all elements i.e. array is split in 1 single piece i.e. the array itself
    }
    while(s<e){
        var mid = Math.floor((s+e)/2);

        var sum=0;
        var piece = 1;
        for(var i=0;i<nums.length;i++){
            var num = nums[i];
            if(sum+num> mid){
                sum=num;
                piece++;
            }else{
                sum+=num;
            }
        }
        if(piece>m){
            s=mid+1;
        }
        else{
            e=mid;
        }
    }
    return e;
};