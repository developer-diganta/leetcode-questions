class Solution {
public:
    int helper(vector<vector<int>> &matrix,vector<vector<int>> &dp, int i,int j,int n,int m){
    if(j>=m || j<0){
        return 1e9;
    }
     
//     if(i==n){
//         return INT_MIN;
//     }
//     cout<<"i: "<<i<<"...."<<"j: "<<j<<endl;
    
    if(i==n-1){
        return matrix[n-1][j];
    }
    if(dp[i][j]!=-1) return dp[i][j];
    int down = matrix[i][j]+helper(matrix,dp,i+1,j,n,m);
    int left = matrix[i][j]+helper(matrix,dp,i+1,j-1,n,m);
    int right = matrix[i][j]+helper(matrix,dp,i+1,j+1,n,m);
    return dp[i][j]=min(down,min(left,right));
}
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int n=matrix.size();
    int m=matrix[0].size();
    int maxi=INT_MAX;
    vector<vector<int>> dp(n,vector<int> (m,-1));
//     cout<<"///////n///////"<<n<<"?????????"<<m<<endl;
//     return helper(matrix,dp,0,0,n,m);
    for(int i=0;i<m;i++){
//         cout<<"i: "<<matrix[0][i]<<endl;
        int trial=helper(matrix,dp,0,i,n,m);
//         cout<<"trial: "<<trial<<endl;
        maxi=min(maxi,trial);
    }
    return maxi;
    }
};