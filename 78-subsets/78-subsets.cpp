class Solution {
public:
    void solve(vector<int>nums,vector<int>ans,vector<vector<int>>&fans,int i){
        if(i==nums.size()){
            fans.push_back(ans);
            return;
        }
        solve(nums,ans,fans,i+1);
        ans.push_back(nums[i]);
        solve(nums,ans,fans,i+1);
    }
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<int>ans;
        vector<vector<int>>fans;
        solve(nums,ans,fans,0);
        return fans;
    }
};