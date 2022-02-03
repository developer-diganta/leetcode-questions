/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var s = 0;
    var e=x;
    while(s<=e){
        var mid = Math.floor((s+e)/2);
        if(mid*mid===x){
            return mid;
        }
        else if(mid*mid<x){
            s=mid+1;
        }
        else
            e=mid-1;
    }
    return s-1;
};