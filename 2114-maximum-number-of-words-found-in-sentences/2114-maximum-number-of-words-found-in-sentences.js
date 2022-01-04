/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function(sentences) {
    var len = 0;
    sentences.map((x)=>{
        const a = x.split(" ");
        len = Math.max(len,a.length);
    })
    return len;
};