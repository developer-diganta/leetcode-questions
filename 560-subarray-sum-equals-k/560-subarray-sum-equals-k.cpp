class Solution {
public:
    int subarraySum(vector<int>& arr, int k) {
                unordered_map<int,int>m;
        int pre=0;
        int ans=0;
        int n=arr.size();
        for(int i=0;i<n;i++){
            pre=pre+arr[i];
            if(pre==k){
                ans++;
            }
            
            if(m.find(pre-k)!=m.end()){
                ans+=m[pre-k];
            }    
            m[pre]++;
        }
        return ans;
    }
};