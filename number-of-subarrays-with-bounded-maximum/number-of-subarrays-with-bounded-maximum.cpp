class Solution {
public:
    int numSubarrayBoundedMax(vector<int>& nums, int L, int R) {
        int result=0, left=-1, right=-1;
        for (int i=0; i<nums.size(); i++) {
            if (nums[i]>R) left=i;
            if (nums[i]>=L) right=i;
            result+=right-left;
        }
        return result;
    }
};