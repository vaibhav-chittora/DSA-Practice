

function f(root1, root2) {
    // Base case--> if both trees are empty then they are eqv.
    if (root1 == null && root2 == null) return true;
    
    //if any one of the root is null then also it is not flip eqv.
    if (root1 == null || root2 == null) return false;

    //if the root values are not same then it is not flip equicalent
    if (root1.val != root2.val)  return false

    // at last compare the childs and return
    return (f(root1.left, root2.left) && f(root1.right, root2.right)) || (f(root1.left, root2.right) && f(root1.right, root2.left))
}

var flipEquiv = function (root1, root2) {
    return f(root1, root2)
};