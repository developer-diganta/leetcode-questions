class Solution {
public:
vector<long long> maximumEvenSplit(long long f) {
        if(f%2!=0) return {};
        vector<long long> ans;
        long long j=2;
        while(f>0){
            if(f-j<=j){
                ans.push_back(f);
                return ans;
            }
            ans.push_back(j);
            f-=j;
            j+=2;
        }
        return ans;
    }
};