/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var arr = new Array(indices.length);
    var i=0;
    indices.map((x)=>{
        arr[x]=s[i++];
    })
    return arr.join('');
};