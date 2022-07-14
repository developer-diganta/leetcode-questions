class Solution {
public:
    int helper(vector<vector<int>>& arr, vector<vector<int>>& dp,int i,int j, int n){
    // Write your code here.
   if(i==n-1){
       return arr[n-1][j];
   }
//     int a,b,c;
    if(dp[i][j]!=-1) return dp[i][j];
        int a=arr[i][j]+helper(arr,dp,i+1,j,n);
        int b=arr[i][j]+helper(arr,dp,i+1,j+1,n);
    return dp[i][j]=min(a,b);
}

    int minimumTotal(vector<vector<int>>& triangle) {
        int n= triangle.size();
    vector<vector<int>>dp(n,vector<int> (n,-1));
    return helper(triangle,dp,0,0,n);        
    }
};