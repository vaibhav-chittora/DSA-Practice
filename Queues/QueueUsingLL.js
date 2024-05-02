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


class Queue {
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



const qu = new Queue();

qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
console.log(qu.getFront(), qu.getBack());
qu.dequeue()
console.log(qu.getFront(), qu.getBack());
qu.dequeue()
console.log(qu.getFront(), qu.getBack());
qu.dequeue()
console.log(qu.getFront(), qu.getBack());
