/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    var l=0,r=arr.length-k,mid=0;
    while(l<r){
        mid=Math.floor((l+r)/2);
        if(x-arr[mid]>arr[mid+k]-x){
            l=mid+1
        }
        else
            r=mid;
    }
    var a=[]
    for(var i=l;i<l+k;i++){
        a.push(arr[i]);
    }
    return a;
};