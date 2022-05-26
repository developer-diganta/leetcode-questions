/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var x = n.toString(2);
    var c=0;
    console.log(x);
    for(var i=0;i<x.length;i++) if(x[i]==='1') c++;
    return c;
};