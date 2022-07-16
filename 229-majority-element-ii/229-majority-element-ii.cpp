class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        unordered_map<int,int>a;
        int n=nums.size();
        for(int i=0;i<n;i++){
            a[nums[i]]++;
        }
        int cmp = n/3;
        vector<int>arr;
        for(auto i:a){
            if(i.second>cmp){
                arr.push_back(i.first);
            }
        }
        return arr;
    }
};