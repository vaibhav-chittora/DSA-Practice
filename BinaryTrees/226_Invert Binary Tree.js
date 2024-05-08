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
 * @return {TreeNode}
 */


//function which invert the whole bonary tree.

function f(root) {

    if (root === null) return []; //if the tree is empty

    f(root.left); //invert left sub tree(LST)

    f(root.right); //invert right sub tree(RST)

    //invert the whole treee using swap
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

}

var invertTree = function (root) {
    f(root);
    return root; //return
};