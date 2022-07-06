class Solution {
public:
    vector<int> diffWaysToCompute(string s) {
        int n = s.size();
        vector<int> res;
        
        for(int i=0; i<n; i++) {
            if(s[i] == '+' || s[i] == '-' || s[i] == '*') {
                vector<int> left = diffWaysToCompute(s.substr(0, i));
                vector<int> right = diffWaysToCompute(s.substr(i+1));
                
                for(auto l : left) {
                    for(auto r : right) {
                        if(s[i] == '+') res.push_back(l + r);
                        
                        else if(s[i] == '-') res.push_back(l - r);
                        
                        else res.push_back(l * r);
                    }
                }
            }
        }
        if(res.empty()) res.push_back(stoi(s));
        
        return res;
    }
};