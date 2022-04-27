class Solution {
public:
    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
        unordered_map<int,vector<int>> mp;
        for(int i=0; i<pairs.size(); i++){
            mp[pairs[i][0]].push_back(pairs[i][1]);
            mp[pairs[i][1]].push_back(pairs[i][0]);
        }
        
        vector<int> visited(s.size());
        queue<int> q;
        string res = s;
        for(int i=0; i<s.size(); i++){
            vector<char> characters;
            vector<int> indexes;
            if(!visited[i]){
                visited[i] = 1;
                q.push(i);
                while(!q.empty()){
                    int ind = q.front();
                    characters.push_back(s[ind]);
                    indexes.push_back(ind);
                    q.pop();
                    for(int b : mp[ind]){
                        if(!visited[b]){
                            cout<<b<<" ";
                            visited[b] = 1;
                            q.push(b);
                        }
                    }
                }
                sort(characters.begin(), characters.end());
                sort(indexes.begin(), indexes.end());
                for(int j = 0; j<indexes.size();j++){
                    res[indexes[j]] = characters[j];
                }
            }
        }
       return res;
    }
};