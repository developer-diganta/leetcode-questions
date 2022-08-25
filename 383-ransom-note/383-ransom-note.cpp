class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char,int>r;
        for(auto x:magazine){
            r[x]++;
        }
        for(auto x:ransomNote){
            r[x]--;
            if(r[x]<0) return false;
        }
        return true;
    }
};