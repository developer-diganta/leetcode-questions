class Solution 
{
public:
    vector<int> topKFrequent(vector<int>& nums, int k) 
    {
        unordered_map<int, int> mymap;
        for ( int n : nums ) {
            mymap[n] += 1;
        }
        
        vector<pair<int,int>> p;
        
        for ( auto i : mymap ) {
            p.push_back(make_pair(i.second, i.first));
        }
        
        sort(p.begin(), p.end(), greater<>());
        
        vector<int> res;
        for ( int i=0; i<k; i++ ) {
            res.push_back(p[i].second);
        }
        
        return res;
    }
};