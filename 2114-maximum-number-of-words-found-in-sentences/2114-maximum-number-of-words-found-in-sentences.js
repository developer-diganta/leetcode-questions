/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function(sentences) {
  let a = [];

  for (let i = 0; i < sentences.length; i++) {
    a.push(sentences[i].split(" ").length);
  }

  return Math.max(...a);
};