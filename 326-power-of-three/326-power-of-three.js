/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1) return true;
    if(n==0) return false;
    var a=false;
    if(n%3==0) a=isPowerOfThree(n/3);
    return a||false;
};