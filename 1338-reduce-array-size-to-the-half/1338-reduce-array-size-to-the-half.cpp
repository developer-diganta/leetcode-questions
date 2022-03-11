class Solution {
public:
    int minSetSize(vector<int>& arr) {
      map<int,int>m;
        priority_queue<pair<int,int>>p;
        int i,j;
        int n = arr.size();
        for(i=0;i<n;i++){
            m[arr[i]]++;
        }
        int count=0;
        for(auto k:m){
            p.push(make_pair(k.second,k.first));
        }
		int k=n;
        while(k-p.top().first > n/2){
            k -= p.top().first;
            p.pop();
            count++;
        }
        count++;
        return count;
    }
};