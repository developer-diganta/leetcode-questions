class Solution {
public:
    bool isBipartite(vector<vector<int>>& adj) {
        	    
	    int V=adj.size();
	   vector<int> vis(V,-1);
        for(int it=0;it<V;it++){
            if(vis[it]==-1){
                queue<int>q;
                vis[it]=1;
                q.push(it);
                while(!q.empty()){
                    int node = q.front();
                    // int prev = q.front().second;
                    q.pop();
                    for(auto i:adj[node]){
                        if(vis[i]==-1){
                            vis[i]=!vis[node];
                            q.push(i);
                        }
                        else if(vis[i]==vis[node]){
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }
};