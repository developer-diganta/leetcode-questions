/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var helper = (x,n) => {
        if(x===0) return 0;
        if(n===0) return 1;
        var res = helper(x*x,Math.floor(n/2));
        if(n%2===0){
            return res;
        }
        else{
            return x*res;
        }
    }
    var t = helper(x,Math.abs(n));
    if(n<0) return 1/t;
    else return t;
};