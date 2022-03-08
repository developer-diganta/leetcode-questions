class Solution {
public:
    // void swap(int* a,int* b){
    //     int t=*a;
    //     *a=*b;
    //     *b=t;
    // }
    int getMinSwaps(string nums, int k) {
        vector<char>n;
        for(int i=0;i<nums.length();i++){
            n.push_back(nums[i]);
        }
        // for(int i=0;i<k;i++){
        //     next_permutation(n.begin(),n.end());
        // }
            while (--k >= 0)
        next_permutation(n.begin(), n.end());
        for(int i=0;i<n.size();i++) cout<<n[i];
        int i=0,j=0;
        int ans = 0;
        for(;i<n.size();i++){
            j=i;
            if(n[i]!=nums[j]){
                while(nums[j]!=n[i]){
                    j++;
                    if(j>=n.size()) return -1;
                }
                while(i<j){
                    swap(nums[j],nums[j-1]);
                    j--;
                    ans++;
                }
                // ans+=(j-i);
                // swap(nums[j], nums[i]);
            }
            // j=i+1;
        }
        return ans;
    }
};