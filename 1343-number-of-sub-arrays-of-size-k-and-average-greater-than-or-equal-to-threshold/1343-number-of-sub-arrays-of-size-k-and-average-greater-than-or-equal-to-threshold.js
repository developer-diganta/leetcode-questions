/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var pre=[];
    var t= threshold*k;
    for(var i=0;i<=arr.length-k;i++){
        var no=0;
        for(var j=i;j<i+k;j++){
            no=no+arr[j];
        }
        pre.push(no);
    }
    var c=0;
    for(var i=0;i<pre.length;i++){
        if(pre[i]>=t)
            c++;
    }
    return c;
};