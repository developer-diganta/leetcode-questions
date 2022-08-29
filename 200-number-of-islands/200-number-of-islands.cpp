class Solution {
public:
    void dfs(vector<vector<char>>& p,int i,int j)
    {
        if(i<0 || j<0 || i>=p.size() || j>=p[0].size() || p[i][j]=='0')
            return;
        p[i][j]='0';
        dfs(p,i-1,j);
        dfs(p,i+1,j);
        dfs(p,i,j-1);
        dfs(p,i,j+1);
    }
    
    int numIslands(vector<vector<char>>& grid) {
        int ans=0;
        for(int i=0;i<grid.size();i++)
            for(int j=0;j<grid[i].size();j++)
                if(grid[i][j]=='1')
                {
                    dfs(grid,i,j);
                    ans++;
                }
        return ans;
    }
};