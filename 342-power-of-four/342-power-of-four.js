/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n==1) return true;
    if(n==0) return false;
    var a=false;
    if(n%4==0) a=isPowerOfFour(n/4);
    return a||false;
};