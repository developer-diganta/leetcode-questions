/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    var sol = [];

    var solve = function(o,c,pat){
    // console.log(o," ",c);
    if(o===c && o===0){
        sol.push(pat);
        return;
    }
    if(o!==0 && o<=c){

        solve(o-1,c,pat+"(");
    }
    if(c!==0 && c>=o){

        solve(o,c-1,pat+")");
    }
    
}
    solve(n,n,"");
    return sol;
};