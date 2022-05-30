/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    var helper = (n,arr) => {
        if(n<=1) return n;
        if(arr[n]!==-1) return arr[n];
        return arr[n]=helper(n-1,arr)+helper(n-2,arr);
    }
    
    var arr=new Array(n+1).fill(-1);
    console.log(arr)
    return helper(n,arr);
};