/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function helper(x,n){
    if(n === 0) return 1;
    if(x===0) return 0;
    
    var h = helper(x,Math.floor(n/2));
    if(n%2 === 1){
        return h*h*x;
    }
    else
        return h*h;
}
var myPow = function(x, n) {
    var  r = helper(x,Math.abs(n));
    return r = n>=0?r:1/r;
};

