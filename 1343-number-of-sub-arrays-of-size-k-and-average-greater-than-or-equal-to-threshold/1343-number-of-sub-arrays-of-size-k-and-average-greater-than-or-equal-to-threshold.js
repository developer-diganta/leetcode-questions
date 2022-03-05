/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var getAverage = (n)=>{
    var s=0;
    for(var i=0;i<n.length;i++){
        s=s+n[i];
    }
    return s/n.length;
}
var numOfSubarrays = function(arr, k, threshold) {
    var pre=[];
    for(var i=0;i<=arr.length-k;i++){
        var no=0;
        for(var j=i;j<i+k;j++){
            no=no+arr[j];
        }
        pre.push(no/k);
    }
    var c=0;
    for(var i=0;i<pre.length;i++){
        if(pre[i]>=threshold)
            c++;
    }
    return c;
};