/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n===1) return 0;
    var parent = kthGrammar(n-1,Math.floor(k/2) + k%2);
    if(parent === 1){
        return k%2===1?1:0;
    }
    else return k%2===1?0:1;
};