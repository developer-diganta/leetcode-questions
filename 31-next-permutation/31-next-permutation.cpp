class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int idx1=-1;
        for(int i=n-2;i>=0;i--){
            if(nums[i]<nums[i+1]){
                idx1=i;
                break;
            }
        }
        
        if(idx1==-1){
            reverse(nums.begin(),nums.end());
        }
        else{
            int idx2=n-2;
            for(int i=n-1;i>idx1;i--){
                if(nums[i]>nums[idx1]){
                    idx2=i;
                    break;
                }
            }
            swap(nums[idx1],nums[idx2]);
            reverse(nums.begin()+idx1+1,nums.end());
        }
    }
};