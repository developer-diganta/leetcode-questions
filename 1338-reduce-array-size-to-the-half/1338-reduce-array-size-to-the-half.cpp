class Solution {
public:
    static bool cmp(pair<int,int>a,pair<int,int>b){
        return a.second<b.second;
    }
    int minSetSize(vector<int>& arr) {
        unordered_map<int,int> mp;
        for(int i=0;i<arr.size();i++){
            mp[arr[i]]++;
        }
        // sort(mp.begin(),mp.end());
        int size=arr.size();
        vector<pair<int,int>> v;
        for(auto x:mp){
            v.push_back({x.first,x.second});
        }
        sort(v.begin(),v.end(),cmp);
        int i;
        for(i=v.size()-1;i>=0;i--){
            size=size-v[i].second;
            if(size<=arr.size()/2) return v.size()-i;
        }
        return arr.size()-i;
    }
};