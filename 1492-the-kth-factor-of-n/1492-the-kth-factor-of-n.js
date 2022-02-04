/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    var facts = [1];
    for(var i=2;i<n;i++){
        if(n%i===0){
            facts.push(i);
        }
    }
    facts.push(n);
    if(facts.length<k){
        return -1;
    }
    else{
        return facts[k-1];
    }
};