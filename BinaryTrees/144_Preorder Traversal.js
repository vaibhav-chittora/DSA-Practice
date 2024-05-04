
let result; // empty resultant array 

//In Preorder traversal : root --> left --> right

function preorder(root) {

    //base case if root OR tree is eempty
    if (root === null) return; //we just return

    //we push root in result
    result.push(root.val);

    //recursively call left
    preorder(root.left);

    //then right
    preorder(root.right);

}

var preorderTraversal = function (root) {
    result = []
    preorder(root)
    return result;
};