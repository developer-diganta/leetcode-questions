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
    int inorder(TreeNode* root,int &n,int k)
    {
    
        if(root->left !=NULL){
            int x= inorder(root->left,n,k);
            if(x!=-1) return x;
            
            if(n==k) return root->left->val;
        }
        
        n++;
        if(n==k) return root->val;
        
        if(root->right !=NULL){
            int x= inorder(root->right,n,k);
            if(x!=-1) return x;
            
            if(n==k) return root->right->val;
        }
        
        return -1;
        
    }
    int kthSmallest(TreeNode* root, int k) {
        int c=0;
        return inorder(root,c,k);
    }
};