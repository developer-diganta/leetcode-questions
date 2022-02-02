/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // var alternate = true;
    var last = n&1;
    n>>=1; 
    while(n>0){
        if(last===(n&1)){
            return false;
        }
        last = n&1;
        n>>=1;

    }
    return true;
};