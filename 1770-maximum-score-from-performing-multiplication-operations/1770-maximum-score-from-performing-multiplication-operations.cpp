class Solution {
public:
    vector<vector<int>> dp;
    int helper(vector<int>& nums, int start, int end, int i, int m, vector<int>& multiplier)
    {
        if(i == m)
            return 0;
        if(dp[i][start] != INT_MIN)
            return dp[i][start];
        int from_front = nums[start] * multiplier[i] + helper(nums, start + 1, end, i + 1, m, multiplier);
        int from_back = nums[end] * multiplier[i] + helper(nums, start, end - 1, i + 1, m, multiplier);
        return dp[i][start] = max(from_front, from_back);
    }
    int maximumScore(vector<int>& nums, vector<int>& multiplier) {
        int n = nums.size();
        int m = multiplier.size();
        dp.resize(m + 1);
        dp.assign(m + 1, vector<int> (m + 1, INT_MIN));
        return helper(nums, 0, n - 1, 0, m, multiplier);
    }
};