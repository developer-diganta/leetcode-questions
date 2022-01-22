/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    var r = 0
    for (var i = 2; i <= n; i++)
        r = (r + k) % i
    r++
    return r
};