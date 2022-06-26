/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combinations = [];
    
    function backtrack(curr = [], index = 1) {
        if (curr.length === k) return combinations.push(curr);
        for (let i = index; i < n + 1; i++) backtrack([...curr, i], i + 1);
    }
    
    backtrack();
    return combinations;
};