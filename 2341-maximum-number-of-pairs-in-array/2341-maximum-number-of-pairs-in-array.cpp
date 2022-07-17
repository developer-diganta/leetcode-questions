class Solution {
public:
    vector<int> numberOfPairs(vector<int>& nums) {
        map<int,int> m1;
        for(auto &it:nums){
            m1[it]++;
        }
        int couple = 0, single = 0;        
        for(auto &[l,r]:m1){
            if(r>=2){
                couple += r/2;           
                single += (r%2!=0);
            }
            else    single++;
        }
        return {couple,single};
    }
};