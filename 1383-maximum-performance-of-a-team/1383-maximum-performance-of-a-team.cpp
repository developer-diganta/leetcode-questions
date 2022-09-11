class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        vector<vector<int>> t;
        
        for(int i = 0 ; i < speed.size() ; i++) {
            t.push_back({efficiency[i] , speed[i]});
        }
        
        sort(t.begin() , t.end());
        
        reverse(t.begin() , t.end());
        
        long long res = 0 , sum = 0;
        
        priority_queue<int , vector<int> , greater<int>> pq;
        
        for(auto x : t) {
            if(pq.size() == k) {
                sum -= pq.top();
                pq.pop();
            }
            
            sum += x[1];
            pq.push(x[1]);
            
            res = max(res , sum * x[0]);
        }
        
        return res % (1000000007);
    }
};