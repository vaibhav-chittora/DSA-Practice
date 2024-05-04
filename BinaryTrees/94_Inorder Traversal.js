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
 * @return {number[]}
 */


let result;

function inorder(root) {
    //if root is null or treee is empty
    if (root == null) return; //return []

    //inorder traversal : left ---> Root ---> right;

    inorder(root.left); //traverse left subtree

    result.push(root.val); //then push root element

    inorder(root.right);  //then traverse right Sub tree;

}


var inorderTraversal = function (root) {
    result = []; //empty result array
    inorder(root);
    return result;
};