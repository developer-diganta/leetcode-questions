/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(node, p, q) {

        if(node.val===p.val || node.val===q.val){
            return node;
        }
        if(node.val<p.val && node.val>q.val || node.val<q.val && node.val>p.val){
            return node;
        }
        if(node.val<p.val && node.val<q.val){
            return lowestCommonAncestor(node.right,p,q);
        }
        else{
            return lowestCommonAncestor(node.left,p,q);
        }
};