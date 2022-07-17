/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) {
        return true
    }
    let i = 0
    let j = Math.floor(num / 2)
    
    while (i <= j) {
        const mid = Math.floor((i + j) / 2)
        
        if (mid * mid === num) {
            return true
        } else if (mid * mid < num) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    return false
};