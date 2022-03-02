/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sArray = s.split("");
    for(let i=0; i<sArray.length; i++){
        if(t.indexOf(sArray[i])===-1){
            return false
        }
        if(t.indexOf(sArray[i])!==-1){
            let pos = t.indexOf(sArray[i]);
            t = t.slice(pos+1);
        }
    }
    return true;
};