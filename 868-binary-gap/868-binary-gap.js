/**
 * @param {number} n
 * @return {number}
 */
var max = (a,b) => {
    return a>b?a:b;
}
var binaryGap = function(n) {
    var maxs = 0;
    var d=0;
    var i=0;
    var last=-1
    while(n!=0){
        if(last === -1 && n&1===1){
            last = i; 
        }
        else if(n&1===1){
            maxs=max(maxs,i-last);
            last = i;
        }
        n=n>>1;
        i++;
    }
    return maxs
};