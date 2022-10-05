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
//     void helper(TreeNode* root,int level,int depth,int val){
//         if(level==depth){
//             TreeNode* node = new TreeNode(val);
//             node->left = root->left;
//             TreeNode* node2=new TreeNode(val);
//             node->right=root->right;
//             root->left=node;
//             root->right=node;
//             return;
//         }
//         helper(root->left,level+1,depth,val);        helper(root->right,level+1,depth,val);

//     }
    void populate(vector<TreeNode*>&mp,TreeNode* root,int depth,int level){
        if(level==depth-1){
            mp.push_back(root);
            return;
        }
        if(!root) return;
        populate(mp,root->left,depth,level+1);        
        populate(mp,root->right,depth,level+1);
    }
    
    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        if(depth==1){
             TreeNode* node = new TreeNode(val);
             node->left = root;
            return node;
        }
        vector<TreeNode*>mp;
        populate(mp,root,depth,1);
        for(int i=0;i<mp.size();i++){
            TreeNode* node = new TreeNode(val);
            if(mp[i]){
                            node->left=mp[i]->left;
            // node->right=mp[i]->right;
            mp[i]->left = node;
        
            TreeNode* node2 = new TreeNode(val);
            node2->right=mp[i]->right;
            mp[i]->right=node2;}
        }
        return root;
    }
};