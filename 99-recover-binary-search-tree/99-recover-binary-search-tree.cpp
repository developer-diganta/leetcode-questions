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
   
     void recoverTreeOpt(TreeNode* root, TreeNode*& prev, TreeNode*& max_, TreeNode*& min_) // optimal solution with O(1) memory
     {
         if (root == nullptr)
         {
             return;
         }
    
         recoverTreeOpt(root->left, prev, max_, min_);

         if (prev && max_ == nullptr && prev->val > root->val)
         {
             max_ = prev;
             min_ = root;
         }

         if (min_ && root->val < min_->val)
         {
             min_ = root;
         }
         
         prev = root;
         recoverTreeOpt(root->right, prev, max_, min_);
     }

 public:
     void recoverTree(TreeNode* root) {
         TreeNode* max_ = nullptr;
         TreeNode* min_ = nullptr;
         TreeNode* prev = nullptr;
         recoverTreeOpt(root, prev, max_, min_);

         swap(max_->val, min_->val);

     }
 };