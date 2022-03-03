/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let i = 0, j = 2;
    let count = 0;
    let gap = A[1] - A[0];
    
    while(j < A.length) {
        const currentGap = A[j] - A[j-1];
        
        if(currentGap === gap) {
            count += (j - i - 1);
            j++;
        } else {
            i = j - 1;
            j = j + 1;
            gap = currentGap;
        }
    }
    return count;
};