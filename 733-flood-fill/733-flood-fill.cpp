class Solution {
public:
    static void dfs(int sr,int sc, vector<vector<int>>& ans,vector<vector<int>>& image, int iniColor, int newColor, int dr[], int dc[]){
        ans[sr][sc] = newColor;
        int n = image.size();
        int m = image[0].size();
        for(int i=0;i<4;i++){
            int newR= sr+dr[i];
            int newC = sc+dc[i];
            if(newR>=0 && newR<n && newC>=0 && newC<m && image[newR][newC]==iniColor && ans[newR][newC]!=newColor){
                dfs(newR,newC,ans,image,iniColor,newColor,dr,dc);
            }
        }
    } 
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int iniColor = image[sr][sc];
        vector<vector<int>> ans = image;
        int dr[4] = {-1,0,1,0};
        int dc[4] = {0,1,0,-1};
        dfs(sr,sc,ans,image,iniColor,newColor,dr,dc);
        return ans;
    }
};