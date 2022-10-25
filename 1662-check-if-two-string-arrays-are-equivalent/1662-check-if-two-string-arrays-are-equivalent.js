/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
            var a="";
        var b="";
        for(x in word1){
            a=a+word1[x];
        }
    for(y in word2){
        b=b+word2[y];
    }
    console.log(a)
    console.log(b)
    return a===b;
};