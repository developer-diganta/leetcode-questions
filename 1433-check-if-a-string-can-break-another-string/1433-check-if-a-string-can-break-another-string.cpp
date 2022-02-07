class Solution {
public:
bool get_X_greater(string s1, string s2, int l){
        for(int i=l; i<s1.length(); i++){
            if(s2[i] > s1[i]) return false;
        }
        return true;
    }
    
    bool get_Y_greater(string s1, string s2, int l){
        for(int i=l; i<s1.length(); i++){
            if(s1[i] > s2[i]) return false;
        }
        return true;
    }
    
    bool checkIfCanBreak(string s1, string s2) {
        sort(s1.begin(), s1.end());
        sort(s2.begin(), s2.end());
        bool flag;
        for(int i=0; i<s1.length(); i++){
            if(s1[i] != s2[i]){
                if(s1[i] > s2[i]){
                    flag = get_X_greater(s1, s2, i);
                }
                else{
                    flag = get_Y_greater(s1, s2, i);
                }
                break;
            }
        }
        return flag;
    }
};