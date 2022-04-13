/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let square = Array(n).fill(0).map(el => Array(n).fill(0));
    let count, row, col;
    count = row = col = 0;
    while (count < n * n) {
        while (square[row][col] === 0) {
            square[row][col++] = ++count;
        }
        col--;
        row++;
        while (square[row] && square[row][col] === 0) {
            square[row++][col] = ++count;
        }
        row--;
        col--;
        while (square[row][col] === 0) {
            square[row][col--] = ++count;
        }
        col++;
        row--;
        while (square[row] && square[row][col] === 0) {
            square[row--][col] = ++count;
        }
        row++;
        col++;
    }
    return square;
};