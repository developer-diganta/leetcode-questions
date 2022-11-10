class Solution {
public:
string removeDuplicates(string s) {
    string ans = "";
    for (auto &i: s) {
        if (i == ans.back()){
            ans.pop_back();
        }
        else{
            ans += i;
        }
    }
    return ans;
}
};