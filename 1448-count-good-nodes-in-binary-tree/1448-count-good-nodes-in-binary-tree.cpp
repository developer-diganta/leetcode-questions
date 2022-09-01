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
 int goodNodes(TreeNode* root,int high=INT_MIN) {
        if(!root)return 0;
        int data = root->val;
        return (data>=high)+goodNodes(root->left,max(high,data))+goodNodes(root->right,max(high,data));    
 }
};