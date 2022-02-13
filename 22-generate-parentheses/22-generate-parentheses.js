/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function(n) {
    var sol = [];
    var solve = function(n,o,c,pat){
    if(c===n && o===n){
        sol.push(pat);
        return;
    }
    if(o<n){
        solve(n,o+1,c,pat+"(");
    }
    if(c<o){
        solve(n,o,c+1,pat+")");
    }
    
}
    solve(n,0,0,"");
    return sol;
};