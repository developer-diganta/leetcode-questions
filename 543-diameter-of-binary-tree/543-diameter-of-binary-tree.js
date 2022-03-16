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

var max = (a,b) => {
    return a>b?a:b;
}
var diameterOfBinaryTree = function(root) {
       var maxi = 0;

    
    var height = (root) => {
        if(root === null) return 0;
        
        var lh = height(root.left);
        var rh = height(root.right);
        
        maxi = max(maxi,lh+rh);
        return 1+max(lh,rh);
    }
    height(root);
    return maxi;
};