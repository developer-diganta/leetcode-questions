class Solution {
public:

int earliestFullBloom(vector<int>& pt, vector<int>& gt) {

        int n = pt.size();
        vector<pair<int,int>>p(n);
        for(int i=0;i<n ;i++){
            p[i].first = gt[i];
            p[i].second = pt[i];
        }
        sort(p.begin(),p.end(),greater<pair<int,int>>());
        int res=0;
        int day=0;
        for(int i=0;i<n;i++){
            res = max(res, day + p[i].first + p[i].second);
            day+=p[i].second;
        }

        return res;
    
    }
};
