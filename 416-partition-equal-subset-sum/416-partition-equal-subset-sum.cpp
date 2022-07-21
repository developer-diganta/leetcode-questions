class Solution {
public:
    bool helper(vector<int> &nums, vector<vector<int>> &dp, int idx, int target){
        if(target == 0) return true;
        if(idx == 0) return nums[0]==target;
        if(dp[idx][target]!=-1) return dp[idx][target];
        bool left = helper(nums,dp, idx-1, target);
        bool include = false;
        if(nums[idx]<=target){
            include = helper(nums,dp, idx-1, target-nums[idx]);
        }
        return dp[idx][target]=include||left;

    }
    
    bool canPartition(vector<int>& arr) {
            int tSum=0;
        int n = arr.size();
    for(int i=0;i<n;i++) tSum+=arr[i];
    if(tSum%2!=0) return false;
            vector<vector<int>> dp(n,vector<int>(tSum/2+1,-1));
    return helper(arr,dp,n-1,tSum/2);
    }
};