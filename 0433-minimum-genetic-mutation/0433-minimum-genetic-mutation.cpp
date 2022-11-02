class Solution {
    int n;
    
    int findMoves(string str, string target, map<string, int> vis, vector<string>& bank){
        if(str == target)
            return 0;
        
        if(vis[str] == 1)
            return 1e4;
        
        vis[str] = 1;
        int ans = 1e4;
        
        for(auto i : bank){
            int diff = 0;
            for(int j = 0; j<n; j++){
                if(i[j] != str[j])
                    diff++;
            }
            
            if(diff == 1)
                ans = min(ans, findMoves(i, target, vis, bank));
        }
        
        if(ans != 1e4)
            ans++;
        
        return ans;
    }
public:
    int minMutation(string start, string end, vector<string>& bank) {
        n = start.size();
        
        map<string, int> vis;
        int ans = findMoves(start, end, vis, bank);
        
        if(ans == 1e4)
            return -1;
        return ans;
    }
};