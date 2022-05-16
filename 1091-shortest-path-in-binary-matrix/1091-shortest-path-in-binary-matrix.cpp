class Solution {
public:
    bool isValidPoint(int x, int y, int n, int m) {
        return x >= 0 && x <= n && y >= 0 && y <= m;
    }
    
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int n = grid.size()-1, m = grid[0].size()-1;
        if (grid[0][0] || grid[n][m]) 
            return -1;
        
        queue<vector<int> > q;
        vector<int> curr;
        
        q.push({0, 0});
        grid[0][0] = 1;
        
        while (!q.empty() && !grid[n][m]) {
            curr = q.front();
            q.pop();
            
            for (int i = 0; i < 8; i++) {
                int x = curr[0] + x_points[i];
                int y = curr[1] + y_points[i];
                
                if (isValidPoint(x, y, n, m) && grid[x][y] == 0) {
                    grid[x][y] = grid[curr[0]][curr[1]] + 1;
                    q.push({x, y});
                }
            }
        }
        return grid[n][m] ? grid[n][m] : -1;
    }
    
private:
    vector<int> x_points = {-1,-1,-1,0,0,1,1,1};
    vector<int> y_points = {-1,0,1,-1,1,-1,0,1};
};