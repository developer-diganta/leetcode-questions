/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var count = 0;
    for (var i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) !== -1) {
            count++;
        }
    }
    return count === 26 ? true : false;
};