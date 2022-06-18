/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var helper = (x,arr)=>{
        if(x===0) return 1;
        if(x<0) return 0;
        if(arr[x]) return arr[x];
        return arr[x]=helper(x-1,arr)+helper(x-2,arr);
    }
    
    var arr = [];
    return helper(n,arr);
};