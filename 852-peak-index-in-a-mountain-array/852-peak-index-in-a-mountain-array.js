/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    var s=0,e=arr.length-1,mid=0;
    while(s!==e){
        mid=Math.floor((s+e)/2);
        if(arr[mid]<arr[mid+1]){
            s=mid+1;
        }
        else{
            e=mid;
        }
    }
    return s;
};