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
    bool validateBST(TreeNode* node, long long low, long long high) {
        if(node==nullptr)   return true;
        if(node->val<=low || node->val>=high)
            return false;
        return validateBST(node->left, low, node->val) && validateBST(node->right, node->val, high);
    }
public:
    bool isValidBST(TreeNode* root) {
        return validateBST(root, (long long)INT_MIN-1, (long long)INT_MAX+1);
    }
};