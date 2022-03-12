class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
         vector<int> top(grid[0].size(), 0);
        vector<int> left(grid.size(), 0);
        int ans = 0;
        for(int i = 0; i < grid.size(); ++i){
            for(int j = 0; j < grid[0].size(); ++j){
                left[i] = max(left[i], grid[i][j]);
                top[j] = max(top[j], grid[i][j]);
            }
        }
        for(int i = 0; i < grid.size(); ++i){
            for(int j = 0; j < grid[0].size(); ++j){
                ans += min(left[i], top[j]) - grid[i][j];
            }
        }
        return ans;
    }
};