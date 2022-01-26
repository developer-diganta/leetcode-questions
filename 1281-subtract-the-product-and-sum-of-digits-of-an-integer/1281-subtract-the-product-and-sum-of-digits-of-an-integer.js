/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
        const values = n.toString()
    let sum = 0, product = 1
    for (const val of values) {
        sum += Number(val)
        product *= Number(val)
    }
    return product - sum
};