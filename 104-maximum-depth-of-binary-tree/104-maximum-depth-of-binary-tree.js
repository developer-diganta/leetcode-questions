/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = (a,b)=>{
    return a>b?a:b;
}
var maxDepth = function(root) {
    if (root === null) return 0;
    
    var l = maxDepth(root.left);
    var r = maxDepth(root.right);
    return 1+max(l,r);
    
};