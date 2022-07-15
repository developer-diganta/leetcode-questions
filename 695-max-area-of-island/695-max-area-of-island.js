/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j =0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                result = Math.max(result, dfs(i, j, 0));
            }
        }
    }
    
    function dfs(row, colum) {
        if(row < 0 || row >= grid.length || colum < 0 || colum >= grid[0].length || grid[row][colum] !== 1) {
            return 0;
        }
        grid[row][colum] = -1;
        return 1 + dfs(row - 1, colum) + dfs(row + 1, colum) + dfs(row, colum - 1) + dfs(row, colum + 1);
    }
    
    return result;
};