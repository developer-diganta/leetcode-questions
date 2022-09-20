class Solution {
public:
    int findLength(vector<int>& nums1, vector<int>& nums2) {
                vector<vector<int>> dp(nums1.size(),vector<int> (nums2.size(),0));
        int res = 0;
        
        for(int i =0;i<nums1.size();i++){
            for(int  j = 0;j<nums2.size();j++){
                
                if(nums1[i] == nums2[j]){
                    dp[i][j]+=1;
                    if(i-1>=0 && j-1>=0)dp[i][j]+= dp[i-1][j-1];
                }
                res = max(res,dp[i][j]);
            }
        }
        return res;
    }
};