/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ")

};