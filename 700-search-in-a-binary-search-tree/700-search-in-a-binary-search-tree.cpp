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
      TreeNode* searchEle(TreeNode* root, int val){
        if(root==nullptr)
            return nullptr;
        if(root->val == val)
            return root;
        else if(root->val <= val)
            return searchEle(root->right, val);
        
        return searchEle(root->left, val);
    }
    TreeNode* searchBST(TreeNode* root, int val) {
        return searchEle(root, val);
    }
};