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
    TreeNode *ans = new TreeNode(0);
    TreeNode *rootAns = ans;
    void rightMost(TreeNode *root)
    {
        if(!root)   return;
        rightMost(root->left); 
        ans->right = new TreeNode(root->val);
        ans = ans->right;
        rightMost(root->right);
    }
    TreeNode* increasingBST(TreeNode* root) {
        rightMost(root);
        return rootAns->right;
    }
};