class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Linkedlist {
    constructor() {
        this.head = null; //head of ll
        this.tail = null; //tail of ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        //if the ll is empty
        if (this.head == null) return undefined;
        //if ll is not empty, return the head data
        return this.head.data;
    }

    getTail() {
        //if the ll is empty
        if (this.tail == null) return undefined;
        //if ll is not empty, return the head data
        return this.tail.data;
    }

    removeAthead() {
        //if the LL is empty
        if (this.head == null) return;

        //if ll is not empty, 
        const newHead = this.head.next
        this.head.next = null;
        this.head = newHead; //allocate new Head;


        // if head becomes after removal of the node means there is only one element in the ll 
        if (this.head == null) {
            this.tail = null
        }

    }

    addAtTail(data) {
        //if the ll is empty, means this is the first node to be added
        if (this.head == null) {
            const newNode = new Node(data);
            //as it is the first node so both head and taill will be same.
            this.head = newNode
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data)

            //attaching newnode after the  prev. tail
            this.tail.next = newNode;

            this.tail = newNode; //updating new this.tail
        }
    }

}


class customQueue {
    constructor() {
        //create a new empty list
        this.ll = new Linkedlist()
    }

    enqueue(data) {
        this.ll.addAtTail(data)
    }

    dequeue() {
        this.ll.removeAthead();

    }

    isEmpty() {
        return this.ll.isEmpty();
    }

    getFront() {
        return this.ll.getHead();

    }
    getBack() {
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

//this can be solved using level order approach 100%, just reverse the result array in the last


var levelOrderBottom = function (root) {
    if (root == null) return []; //if root is null

    const qu = new customQueue(); //new queue
    qu.enqueue(root);//add root in que
    qu.enqueue(null); //add null, i.e. 1st level is completed;

    const result = []; //output array bcoz it is in array form;
    let bottomlevel = new Array //level array

    while (!qu.isEmpty()) { //till the time queue is not empty
        const curr = qu.getFront(); //we get the front from que

        qu.dequeue()//we remove it instantly

        if (curr == null) { //if the front element is null, i.e. a level is completed.

            if (!qu.isEmpty()) { //if que is not empty, means elements in it are of next level.

                qu.enqueue(null); //so we add null to the que;

                result.push(bottomlevel)//we push the level array in the result array 

                bottomlevel = new Array(); //we reinitialize the level array

            } else {
                //when the que is empty, we push the last level
                result.push(bottomlevel)
            }

        } else {//if front is not null, 
            bottomlevel.push(curr.val);//we push front element to the level array
            if (curr.left) { //if it has left child
                qu.enqueue(curr.left)//we add in que
            }
            if (curr.right) {//if it has right child
                qu.enqueue(curr.right) //we add in que
            }
        }

    }
    //we reverse the result array , to get the bottom-up level order travesal.
    return result.reverse();
};