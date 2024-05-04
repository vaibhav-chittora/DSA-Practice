
let result;
function postorder(root) {
    //if root is null or treee is empty
    if (root == null) return;

    postorder(root.left) //traverse left subtree
    postorder(root.right) //traverse right subtree
    result.push(root.val) //push the root node
}

var postorderTraversal = function (root) {
    result = [];
    postorder(root);
    return result;

};