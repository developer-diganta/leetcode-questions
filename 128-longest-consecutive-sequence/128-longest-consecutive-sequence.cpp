class Solution {
public:
int longestConsecutive(vector<int>& nums) {
        
       set<int> s;
        for(auto &it : nums){
            s.insert(it);
        }
        int mx=0,count=1,it=INT_MIN;
        
        for(auto itr = s.begin();itr!=s.end();itr++){
            if( itr==s.begin() || *itr != it+1){
               
               count=1;
               it= *itr;
            }
            else if(*itr == it+1){
                count++;
                it= *itr;
            }
            mx= max(count,mx);
        }

        return mx;
    }
};