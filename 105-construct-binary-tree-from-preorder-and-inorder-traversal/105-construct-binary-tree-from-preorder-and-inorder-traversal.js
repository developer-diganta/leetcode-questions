/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const n = inorder.length;
    const map = new Map();
    inorder.forEach((num, index) => map.set(num, index));
    
    let index_pre = 0;
    
    return treeBuilder(0, n - 1);
    
    function treeBuilder(left, right) {
        if (left > right) return null;
        
        const curr_val = preorder[index_pre++];
        const curr_node = new TreeNode(curr_val);
        
        const curr_index = map.get(curr_val);
        
        curr_node.left = treeBuilder(left, curr_index - 1);
        curr_node.right = treeBuilder(curr_index + 1, right);
        
        return curr_node;
    }
};