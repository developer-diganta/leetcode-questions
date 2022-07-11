/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const calculate = (i, j, grid) => {
        if(i === grid.length || j === grid[0].length){
            return 9999999999
        }
        if(i === grid.length - 1 && j === grid[0].length - 1){
            return grid[i][j]
        }
        if(memo[i][j]){
            return memo[i][j]
        }
        memo[i][j] = grid[i][j] + Math.min(calculate(i + 1, j, grid), calculate(i, j + 1, grid))
        return memo[i][j]
    }
    const memo = new Array(grid.length)
    for(let i = 0; i < memo.length; i++){
        memo[i] = new Array(grid[0].length)
    }
    return calculate(0, 0, grid)
};