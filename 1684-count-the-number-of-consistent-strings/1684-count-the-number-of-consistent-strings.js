/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    var count = 0;
    for(var i=0;i<words.length;i++){
       var word = words[i];
        for(var j=0;j<word.length;j++){
            if(!allowed.includes(word[j]))
                break;
            if(j===word.length-1)
                count++;
        }
    }
    return count;

};