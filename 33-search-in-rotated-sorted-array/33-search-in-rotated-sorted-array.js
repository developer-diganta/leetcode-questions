var search = function(nums, target) {
    var pivot = findPivot(nums);
    if(pivot===-1) return binarySearch(nums,target,0,nums.length-1);
    if(nums[pivot]===target) return pivot;
    if(target >= nums[0]){
        return binarySearch(nums,target,0,pivot-1);
    }else{
        return binarySearch(nums,target,pivot+1,nums.length-1)
    }
};

function binarySearch(nums,target,st,ed){
    var s=st;
    var e=ed;
    while(s<=e){
        var mid = Math.floor((s+e)/2);
        if(target===nums[mid])
            return mid;
        else if(target<nums[mid])
            e=mid-1;
        else
            s=mid+1;
    }
    return -1;
}

function findPivot(nums){
    var s=0,e=nums.length-1;
    while(s<=e){
        var mid = Math.floor((s+e)/2);
        if(mid<e && nums[mid]>nums[mid+1]){
            return mid;
        }
        if(mid>s && nums[mid]<nums[mid-1]){
            return mid-1;
        }
        if(nums[mid]<nums[s]){
            e=mid-1;
        }else{
            s=mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([1],0,0,0));