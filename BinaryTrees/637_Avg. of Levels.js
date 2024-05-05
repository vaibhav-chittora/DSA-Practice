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
 * @return {number[]}
 */


var averageOfLevels = function (root) {
    const qu = new customQueue(); // new queue
    if (root == null) return []

    qu.enqueue(root);
    qu.enqueue(null);
    const result = [];
    let levelArray = new Array();

    //function calculating average of each level
    function avg() {
        let sum = 0
        const n = levelArray.length

        for (let i = 0; i < n; i++) {
            sum += levelArray[i]
        }
        return sum / n
    }

    while (!qu.isEmpty()) {
        const curr = qu.getFront();
        qu.dequeue()
        if (curr === null) {
            if (!qu.isEmpty()) {//if qu is not empty, i.e. elements in qu are of next level

                qu.enqueue(null); //so we add null;

                //instead of pushing the levelArray, we push the avg. of level array
                result.push(avg())

                levelArray = new Array(); //make the new level array

            } else {
                
                result.push(avg())
            }

        } else {
            levelArray.push(curr.val);
            if (curr.left) {
                qu.enqueue(curr.left)
            }
            if (curr.right) {
                qu.enqueue(curr.right)
            }
        }
    }

    return result;

};