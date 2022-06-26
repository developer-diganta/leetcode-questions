/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
      let reverse = 0;
    const limit = 2147483648;
    while(x != 0) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x/10);
    }
    if(reverse < -limit || reverse > limit) {
        return 0
    }
    return reverse
};