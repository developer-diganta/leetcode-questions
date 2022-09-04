class Solution {
public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        map<int,map<int,multiset<int>>> mp;
        vector<vector<int>> ans;
        queue<pair<TreeNode*,pair<int,int>>> q;
        q.push({root,{0,0}});
        while(!q.empty()){
            root=q.front().first;
            int x=q.front().second.first,y=q.front().second.second;q.pop();
            mp[x][y].insert(root->val);
            if(root->left) q.push({root->left,{x-1,y+1}});
            if(root->right) q.push({root->right,{x+1,y+1}});
        }
        for(auto x:mp){
            vector<int> col;
            for(auto y:x.second){
                for(auto ele:y.second) col.push_back(ele);
            }
            ans.push_back(col);
        }
        return ans;
    }
};