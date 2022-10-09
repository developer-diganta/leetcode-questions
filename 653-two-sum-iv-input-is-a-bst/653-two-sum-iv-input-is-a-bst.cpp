/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void getMap(TreeNode* root,unordered_map<int,int>&mp){
        if(!root) return;
        mp[root->val]++;
        getMap(root->left,mp);        
        getMap(root->right,mp);
    }
    bool getAns(TreeNode* root,unordered_map<int,int>&mp, int k){
        if(!root) return false;
        if(mp[k-root->val]){
            if(k-root->val==root->val && mp[k-root->val]>1) return true;
            else if(k-root->val!=root->val) return true;
        }
        return getAns(root->left,mp,k)||getAns(root->right,mp,k);
    }
    bool findTarget(TreeNode* root, int k) {
        unordered_map<int,int>mp;
        getMap(root,mp);
        return getAns(root,mp,k);
    }
    
};