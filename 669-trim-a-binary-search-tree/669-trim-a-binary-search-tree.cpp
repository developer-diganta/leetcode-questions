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
    void solve(TreeNode **root, int &low, int &high){
        if(*root == nullptr)        return;
        if((*root)->val < low){
            (*root) = (*root)->right;
            solve(root, low, high);
        } else if((*root)->val > high){
            (*root) = (*root)->left;
            solve(root, low, high);
        } else{
            solve(&((*root)->left), low, high);
            solve(&((*root)->right), low, high);
        }
    }
    
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        solve(&root, low, high);
        return root;
    }
};