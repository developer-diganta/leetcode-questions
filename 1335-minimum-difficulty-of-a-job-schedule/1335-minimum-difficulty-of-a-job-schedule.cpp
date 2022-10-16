class Solution {
public:
    int dp[302][11];
    int solve(vector<int>&v, int n, int i, int d){
        if(d==1){
            int mx=0;
            for(int k=i;k<n;k++){
                mx=max(mx,v[k]);
            }
            return mx;
        }
        if(dp[i][d]!=-1)
            return dp[i][d];
        int mx=0;
        int ans=INT_MAX;
        for(int k=i;k<=n-d;k++){
            mx=max(mx,v[k]);
            int temp=solve(v,n,k+1,d-1);
            ans=min(ans,mx+temp);
        }
        return dp[i][d]=ans;
    }
    int minDifficulty(vector<int>& v, int d) {
        int n=v.size();
        if(n<d)
            return -1;
        memset(dp,-1,sizeof(dp));
        int res=solve(v,n,0,d);
        return res;
    }
};