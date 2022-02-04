/**
 * @param {number} n
 * @return {string[]}
 */
var gcd = (a,b) =>{
    if(b===0){
        return a;
    }
    return gcd(b,a%b);
}
var simplifiedFractions = function(n) {
    var res = [];
    for(var i=2;i<=n;i++){
        for(var j=1;j<i;j++){
            if(gcd(j,i)===1){
                res.push(j+"/"+i);
            }
        }
    }
    return res;
};