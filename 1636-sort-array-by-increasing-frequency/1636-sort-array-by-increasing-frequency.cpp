class Solution {
public:
    static bool cmp(pair<int, int> &a, pair<int, int> &b) {
        if(a.first == b.first)
            return a.second > b.second;
        return a.first < b.first;
    }
    vector<int> frequencySort(vector<int>& nums) {
        unordered_map<int, int> mp;
        for(const int &it : nums)
            mp[it]++;
        vector<pair<int, int>> arr;
        for(const int &it : nums)
            arr.push_back({mp[it], it});
        sort(arr.begin(), arr.end(), cmp);
        for(int i=0; i<arr.size(); i++)
            nums[i] = arr[i].second;
        return nums;
    }
};