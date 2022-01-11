/**
 * @param {string} s
 * @return {string}
 */
function sorrt(w1,w2){
    return w1[w1.length-1]>w2[w2.length-1]?1:-1;
}
// var ans;
var sortSentence = function(s) {
    s = s.split(" ");
    s.sort(sorrt);
    return s.map((x)=>x.substring(0,x.length-1)).join(" ");
};