/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const mod = 1e9 + 7
    let prev = new Array(5).fill(1)
    let next = new Array(5).fill(1)

    for (let i = 1; i < n; i++) {
        next[0] = prev[1] + prev[2] + prev[4]
        next[1] = prev[0] + prev[2]
        next[2] = prev[1] + prev[3]
        next[3] = prev[2]
        next[4] = prev[2] + prev[3]

        prev = next.map(val => val % mod)
    }

    return next.reduce((acc, val) => acc + val, 0) % mod
};