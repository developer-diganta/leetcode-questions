/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var y = s.split("").sort().join("");
    var z = t.split("").sort().join("");
    return y===z;
};