/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let M = heights.length, N = heights[0].length, DIR = [[0,1],[1,0],[0,-1],[-1,0]]
    let pac = new Set(), atl = new Set()
    for (let i = 0 ; i < N ; i ++) {
        dfs(0, i, pac, heights[0][i])
        dfs(M - 1, i, atl, heights[M - 1][i])
    }
    for (let i = 0 ; i < M ; i ++) {
        dfs(i, 0, pac, heights[i][0])
        dfs(i, N - 1, atl, heights[i][N - 1])
    }
    let result = []
    for (let i = 0 ; i < M ; i ++) {
        for (let j = 0 ; j < N ; j ++) {
			// if can flow to both pacific and atlantic oceans
            if (pac.has("m" + i + "n" + j) && atl.has("m" + i + "n" + j)) 
                result.push([i, j])
        }
    }
    return result
    function dfs(m, n, ocean, prev) {
        if (m >= M || n >= N || m < 0 || n < 0 || 
            heights[m][n] < prev || ocean.has("m" + m + "n" + n)) return
        
        ocean.add("m" + m + "n" + n)
        for (let dir of DIR) {
            dfs(m + dir[0], n + dir[1], ocean, heights[m][n])
        }
    }
};