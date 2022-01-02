class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        int pre =0;
        vector<int>a{ };
        for(int i=0;i<n;i++){
            pre=0;
            for(int j=i;j<n;j++){
                pre+=nums[j];
                a.push_back(pre);
            }
           
        }
        sort(begin(a),end(a));
        long long s=0;
        for(int i=left-1;i<right;i++){
            s=s+a[i];
        }
        int ss = s%(1000000007);
        return ss;
    }
};