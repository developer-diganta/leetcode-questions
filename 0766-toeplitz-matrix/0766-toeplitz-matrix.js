/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix =  (matrix) => { 
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[0].length - 1; col++){
            if(matrix[row][col] !== matrix[row + 1][col + 1]){
                return false
            }
        }
    }
    return true
};