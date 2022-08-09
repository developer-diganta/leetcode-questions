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
    TreeNode* helper(vector<int> &A,int &i, int ub){
        if(i==A.size() || A[i]>ub) return NULL;
        TreeNode* node = new TreeNode(A[i++]);
        node->left = helper(A,i,node->val);
        node->right=helper(A,i,ub);
        return node;
    }
    TreeNode* bstFromPreorder(vector<int>& preorder) {
        int i=0;
        return helper(preorder,i,INT_MAX);
    }
};