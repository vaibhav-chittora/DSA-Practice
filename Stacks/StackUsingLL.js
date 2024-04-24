var Node = function (data) {
    this.data = data
    this.next = null;

}


var MyLinkedList = function () {
    this.head = null;
};


MyLinkedList.prototype.addAtHead = function (val) {
    if (this.head == null) {
        this.head = new Node(val)
    }
    else {

        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }

};

MyLinkedList.prototype.deleteAtHead = function () {

    if (this.head == null) return;
    else {
        let newHead = this.head.next;
        let NodeToBedel = this.head;
        this.head = newHead;
        NodeToBedel.next = null;

    }

}


class Stack {
    #ll;

    constructor() {
        this.#ll = new MyLinkedList();
    };

    push(element) {
        this.#ll.addAtHead(element);
    }

    pop() {
        this.#ll.deleteAtHead()
    }

    top() {
        return this.#ll.head.data;
    }

    isEmpty() {

        return this.#ll.head == null
    }

};

let s = new Stack();

s.push(10)
s.push(20)
s.push(30)
console.log(s.top());
s.pop()
console.log(s.top());
s.pop()
console.log(s.top());
