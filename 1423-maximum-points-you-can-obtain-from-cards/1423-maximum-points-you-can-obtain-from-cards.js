/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(A, k) {
    const N = A.length;
    const total = A.reduce((a, b) => a + b);
    if (N === k) return total;
    let l = 0;
    let r = 0;
    let sum = 0;
    let max = 0;
    
    while (r < A.length) {
        sum += A[r];
        
        if (r - l + 1 === N - k) {
            max = Math.max(max, total - sum);
            sum -= A[l++];
        }
        
        r++;
    }
    
    return max;
};