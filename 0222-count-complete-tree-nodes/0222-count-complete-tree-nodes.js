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
var countNodes = (root,count = 0) => {
    if (root == null)
        return 0;
    let traverse = node => {
        if (node == null) return;
        else count++;
        traverse(node.left);
        traverse(node.right);
        return;
    }
    traverse(root);
    return count;
};