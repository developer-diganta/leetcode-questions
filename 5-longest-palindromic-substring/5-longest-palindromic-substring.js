/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let [a, b] = [0, 0]

    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i + 1]) {
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
                [a, b] = (r - l + 1) > (b - a + 1) ? [l, r] : [a, b]
            }
        }
    }
    
    return s.substring(a, b + 1)
};