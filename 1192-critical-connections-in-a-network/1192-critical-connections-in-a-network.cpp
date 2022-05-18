class Solution {
public:
    vector<vector<int>> ans;
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        unordered_map<int,vector<int>> g;
        for(auto con : connections) {
            g[con[0]].push_back(con[1]);
            g[con[1]].push_back(con[0]);
        }
        vector<int> time(n);
        unordered_set<int> visited;
        dfs(g,0,-1,1,time,visited);
        return ans;
    }
    
    void dfs(unordered_map<int,vector<int>>& g, int cur,int par, int ts,vector<int>& time,unordered_set<int>& visited) {
        visited.insert(cur);
        time[cur] = ts;
        for(int x: g[cur]) {
            if(x == par) continue; 
            if(visited.find(x) == visited.end()) {
                dfs(g,x,cur,ts + 1, time, visited); 
            } 
            time[cur] = min(time[cur], time[x]); 
            if(ts< time[x]) { 
                vector<int> temp(2);
                temp[0] = cur;
                temp[1] = x;
                ans.push_back(temp);
            }
        }
    }
};