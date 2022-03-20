class Solution {
public:
    bool isPossibleDivide(vector<int>& nums, int k) {
        map<int,int> m;
        for(auto num : nums)
            m[num]++;
        
        for(auto [key, value] : m)
        {
            while(m[key])
            {
                for(int i = key; i < key + k; ++i)
                {
                    m[i]--;
                    if(m[i] < 0)
                        return false;
                }
            }
        }
        return true;
    }
};