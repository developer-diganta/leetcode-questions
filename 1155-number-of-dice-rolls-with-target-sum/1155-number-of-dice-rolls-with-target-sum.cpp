class Solution {
public:
    int dp[31][1001], mod = 1e9+7;
    
    Solution() {
        memset(dp, -1, sizeof(dp));
    }
    
    int numRollsToTarget(int n, int k, int target) {
        if(n==0 && target==0) return 1;
        if(n==0) return 0;
        if(dp[n][target]!=-1) return dp[n][target];
        
        dp[n][target]=0;
        for(int face=1; face<=k; face++) {
            if(face<=target) {
                dp[n][target] += numRollsToTarget(n-1, k, target-face);
                dp[n][target] %= mod;
            }
        }
        
        return dp[n][target];
    }
};