class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the ll
        this.tail = null; // tail of the ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if (this.head == null) return undefined;
        return this.head.data;
    }

    getTail() {
        if (this.tail == null) return undefined;
        return this.tail.data;
    }

    removeAtHead() {
        if (this.head == null) return; // ll is empty

        const newHead = this.head.next; // we will store the new head
        this.head.next = null; // disconnect the old head from the ll
        this.head = newHead; // allocating the brand new head

        // if head beconmes null after removal of the node means ll is empty now
        if (this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if (this.head == null) {
            // ll is empty
            const newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode; // we are attaching the new node after the prev tail
            this.tail = newNode; // we updated the tail property
        }
    }
}

class customQueue {
    constructor() {
        this.ll = new LinkedList(); // we will create a brand new empty list
    }
    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}


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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //if root is null, i.e. tree is empty. we return empty array
    if (root == null) return [];

    const qu = new customQueue(); //create a new que

    qu.enqueue(root); //insert the root node, if root is inserted ie.e 1st level is completed
    qu.enqueue(null); //so, we insert null.
    const result = [];//resultant array
    let levelArray = new Array(); //new array for each level

    while (!qu.isEmpty()) { //till the time que is not empty

        const currNode = qu.front(); //we get the front node
        qu.dequeue() //and remove it from the que.

        if (currNode === null) { //end of the last level

            if (!qu.isEmpty()) { //if que is not empty then we have all the elements of the next level

                //before refreshing the levelArray, prev. elements need to be added in the result array
                result.push(levelArray)

                // null can be used as a marker of the current node;
                qu.enqueue(null)

                levelArray = new Array();//reinitialize for next level

            } else {//when the que is empty
                
                //we directly push the level array in result
                result.push(levelArray)

            }
        } else { //if the curr. node is not null

            //we push the value of curr. node to level array
            levelArray.push(currNode.val);

            //and if it has left child,we push it to que
            if (currNode.left) {
                qu.enqueue(currNode.left)
            }

            //same if it has right child we push it to que
            if (currNode.right) {
                qu.enqueue(currNode.right)
            }

        }
    }

    return result;

};