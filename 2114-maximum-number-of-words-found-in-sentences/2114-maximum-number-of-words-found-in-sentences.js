/**
 * @param {string[]} sentences
 * @return {number}
 */
function max(a,b){
    return a>b?a:b;
}
var mostWordsFound = function(sentences) {
    var len = 0;
    sentences.map((x)=>{
        const a = x.split(" ");
        len = max(a.length,len);
    })
    return len;
};