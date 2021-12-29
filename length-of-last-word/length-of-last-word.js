/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let arr = s.split(" ").filter(x=>x!=='')
    return arr[arr.length-1].length;
};