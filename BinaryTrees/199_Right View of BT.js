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



//same as the level order traversal,

// here we just have to return the last node of the levelArray to get the right side view of the tree.


var rightSideView = function (root) {
    if (root == null) return []

    const qu = new customQueue();

    qu.enqueue(root);
    qu.enqueue(null);
    let result = [];
    let levelArray = new Array

    while (!qu.isEmpty()) {
        const curr = qu.front()
        qu.dequeue()

        if (curr == null) {
            if (!qu.isEmpty()) {
                qu.enqueue(curr);
                result.push(levelArray[levelArray.length - 1])
                levelArray = new Array;
            } else {
                result.push(levelArray[levelArray.length - 1])
            }
        }
        else {
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