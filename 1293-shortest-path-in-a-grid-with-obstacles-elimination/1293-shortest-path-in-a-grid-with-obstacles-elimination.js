/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length , n = grid[0].length;
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    const visited = new Array(m).fill(0)
                    .map(()=>new Array(n).fill(0)
                    .map(()=>new Array(k+1).fill(0)));
    const q = [[0,0,k]];
    let steps = 0;
    
    while(q.length){
        let len = q.length;
        
        while(len-->0){
            const [row,col,obstruction] = q.shift();
            
            if(row === m-1  && col === n-1) return steps;
            
            for(const [dx,dy] of dir){
                const nextRow = row + dx;
                const nextCol = col + dy;
                
                if(isValidPath(nextRow,nextCol,m,n)){
                    if(grid[nextRow][nextCol] === 0 
                       && !visited[nextRow][nextCol][obstruction]) {
                        q.push([nextRow,nextCol,obstruction])
                        visited[nextRow][nextCol][obstruction] = true;
                    } else if(grid[nextRow][nextCol] === 1 && obstruction > 0 
                              && !visited[nextRow][nextCol][obstruction-1]) {
                        q.push([nextRow,nextCol,obstruction-1])
                        visited[nextRow][nextCol][obstruction-1] = true;
                    }
                }
            }
        }
        steps++;
    }
    
    return -1;
};

function isValidPath(nextRow,nextCol,m,n){
   return nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n;
}