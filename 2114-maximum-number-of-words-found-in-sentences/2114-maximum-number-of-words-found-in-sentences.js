/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function(sentences) {
    var len = 0;
    sentences.map((x)=>{
        const a = x.split(" ");
        len = a.length>len?a.length:len;
    })
    return len;
};