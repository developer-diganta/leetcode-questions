/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   a = s.split(" ").filter((c)=>c!=='')
   b=""
   for (i=a.length-1;i>=0;i--)
        b=b+" "+a[i];
    return b.trim();
};