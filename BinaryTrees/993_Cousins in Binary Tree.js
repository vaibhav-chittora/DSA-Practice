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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    //we check both heigh and parents;
    let xHeight;
    let yHeight;
    let xParent;
    let yParent;

    let height = 0; //initial height
    
    function dfs(root, x, y, prev) { //helper recursive function
        if (root == null) return; //if root is null

        height++; //from root to leaf node we increment height;

        if (root.val == x) { //if the value = x;
            xHeight = height; //we set height of x to height
            xParent = prev//and parent to the previous element
        }

        //for y we do, same as of x

        if (root.val == y) {
            yHeight = height;
            yParent = prev
        }

        //one by one call dfs func. for left and right

        dfs(root.left, x, y, root);
        dfs(root.right, x, y, root);
        height--;//and decrement height from bottom to top
    }

    //call the main-helper function
    dfs(root, x, y)

    return xHeight === yHeight && xParent != yParent

};