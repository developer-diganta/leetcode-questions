/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(A) {
    let B = [];
    let i = -1;
    while (++i < A[0].length) {
        if (!B[i]) B[i] = [];
        let j = -1;
        while (++j < A.length) {
            B[i][j] = A[j][i];
        }
    }    
    return B;
};