class Solution {
public:
    int ans(vector<int> &nums, int tar,vector<int> &dp){
        if(tar<0) return 0;
        if(tar==0) return 1;
        if(dp[tar]!=-1) return dp[tar];
        int a=0;
        for(int i=0;i<nums.size();i++) a+=ans(nums,tar-nums[i],dp);
        return dp[tar] = a;
        
    }
    int combinationSum4(vector<int>& nums, int target) {
        vector<int>dp(target+1,-1);
        return ans(nums,target,dp);
    }
};