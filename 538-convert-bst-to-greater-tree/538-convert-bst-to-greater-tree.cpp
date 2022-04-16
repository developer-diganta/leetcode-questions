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
    stack<TreeNode*>s;
    void insert(TreeNode *r)
    {
        if(!r)
            return;
        insert(r->left);
        s.push(r);
        insert(r->right);
        
    }

    TreeNode* convertBST(TreeNode* root)  {
        if(!root)
            return root;
        insert(root);
        int q=s.top()->val;
        s.pop();
        while(!s.empty())
        {
            s.top()->val+=q;
            q=s.top()->val;
            s.pop();
        }
        return root;
    }
};