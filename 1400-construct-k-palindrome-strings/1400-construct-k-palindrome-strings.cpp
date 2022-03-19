class Solution {
public:
    bool canConstruct(string s, int k) {
        if(k>s.length()) return false;
        int o=0;
        unordered_map<char,int>ss;
        for(int i=0;i<s.length();i++) ss[s[i]]++;
        for(auto x:ss){
            if(x.second%2!=0) o++;
        }
        if(o>k) return false;
        return true;

    }
};