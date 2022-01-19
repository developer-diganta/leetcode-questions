/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1) return true;
    if(n==0) return false;
    var a=false;
    if(n%2==0) a=isPowerOfTwo(n/2);
    return a||false;
};