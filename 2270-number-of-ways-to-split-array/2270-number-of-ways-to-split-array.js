var waysToSplitArray = function(nums) {
    var arr=[];//stores prefix sum
    var arr2=[];//stores the difference from total
    arr.push(nums[0]);    
    for(var i=1;i<nums.length;i++) arr.push(arr[i-1]+nums[i]);    
    var y=arr[arr.length-1];
    arr2.push(arr[arr.length-1]-nums[0]);
    
    for(var i=1;i<nums.length;i++) {
        arr2.push(arr2[i-1]-nums[i]);
    }

    var ans=0;
    for(var i=0;i<nums.length-1;i++){
        if(arr[i]>=arr2[i]) ans++;
     }
    return ans;
};