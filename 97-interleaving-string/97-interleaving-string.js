/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function(s1, s2, s3) {
    if (s3.length != s1.length + s2.length) return false;
    let cache = {};
    return dp(0, 0);

    function dp(i, j) {
        if (i == s1.length && j == s2.length) return true;

        let key = Array.prototype.join.call(arguments, ',')

        if (cache[key] !== undefined) return cache[key];

        let ans = false;

        for (let off = 0; i + off < s1.length; off++) {
            if (s1[i + off] != s3[i + j + off]) break;
            ans |= dp(i + off + 1, j);
        }

        for (let off = 0; j + off < s2.length; off++) {
            if (s2[j + off] != s3[i + j + off]) break;
            ans |= dp(i, j + off + 1);
        }

        return cache[key] = ans;


    }
};