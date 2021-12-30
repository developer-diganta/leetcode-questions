class Solution {
public:
    int max(int a,int b){
        return a>b?a:b;
    }
    int minPairSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int ans = INT_MIN;
        for(int i=0;i<=(nums.size()/2)-1;i++){
            ans = max(nums[i]+nums[nums.size()-1-i],ans);
        }
        return ans;
    }
};