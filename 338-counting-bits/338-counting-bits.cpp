class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> ans;
        for(int i=0;i<=num;i++){
            int curr_num=i;
            int count=0;
            while(curr_num){
                if(curr_num & 1)
                    count++;
                curr_num=curr_num>>1;
            }
            ans.push_back(count);
        }
        return ans;
    }
};