class Solution {
public:
    bool isPossible(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> count;
        unordered_map<int, int> end;
        for(int i = 0; i < n; i++)
        {
            count[nums[i]]++;
        }
        for(int i = 0; i < n; i++)
        {
            if(count[nums[i]] == 0)
                continue;
            count[nums[i]]--;
            if(end[nums[i] - 1] > 0)
            {
                end[nums[i] - 1]--;
                end[nums[i]]++;
            }
            else if(count[nums[i] + 1] && count[nums[i] + 2])
            {
                count[nums[i] + 1]--;
                count[nums[i] + 2]--;
                end[nums[i] + 2]++;
            }
            else
                return false;
        }
        return true;
    }
};