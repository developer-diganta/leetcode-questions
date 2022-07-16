class Solution {
public:
int m, n;
    int dp[51][51][52];
    int mod = 1000000007;
    
    long long int f(int r, int c, int moves){
        
        if((r < 0 || c < 0 || r >= this->m || c >= this->n) && (moves >= 0)) return 1;
        if(moves <= 0) return 0;
        
        if(dp[r][c][moves]!=-1) return dp[r][c][moves];
        
        long long ans = f(r+1, c, moves-1) + f(r-1, c, moves-1) + f(r, c+1, moves-1) + f(r, c-1, moves-1);
        
        return dp[r][c][moves] = ans%mod;
        
    }
    
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        
        this->m = m;
        this->n = n;
        memset(dp, -1, sizeof(dp));
        
        return f(startRow, startColumn, maxMove);
        
    }
};