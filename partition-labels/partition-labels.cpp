class Solution {
public:
    vector<int> partitionLabels(string s) {
        unordered_map<char,int>mp;
        for(int i=0;i<s.length();i++){
            mp[s[i]] = i;
        }
        int size = 0;
        int end = 0;
        vector<int>ans;
        for(int i=0;i<s.length();i++){
            size+=1;
            end = max(end,mp[s[i]]);
            if(end == i){
                ans.push_back(size);
                size=0;
            }
        }
        return ans;
    }
};