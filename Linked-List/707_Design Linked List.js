//create a node class
function node(value) {
    this.value = value;
    this.next = null;//it is not attached to any node till now
}


var MyLinkedList = function () {
    //initialy the LL is empty
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

    let temp = this.head; //
    let i = 0
    while (i < index && temp != null) { //temp should  be a valid index and not be null 
        temp = temp.next
        i++
    }
    if (temp == null) return -1; //if temp is invalid(Index is invalid);

    //return value
    return temp.value;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (this.head === null) {
        //when the LL is empty
        this.head = new node(val);
    }
    else {
        let n = new node(val);
        n.next = this.head;
        this.head = n;

    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    if (this.head === null) {
        //LL is empty
        this.head = new node(val)
    }
    else {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next
        }

        //when loop ends, temp points towards the tail Node
        let n = new node(val);
        temp.next = n

    }

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (this.head === null && index != 0) return;

    if (this.head === null) {
        this.head = new node(val)
        return;
    }

    if (index == 0) {
        this.addAtHead(val)
        return
    }

    let i = 0;
    let prev = null;
    let currNode = this.head;
    while (i < index && currNode != null) {
        prev = currNode;
        currNode = currNode.next;
        i++
    }

    if (i != index) return;

    let n = new node(val);
    prev.next = n;
    n.next = currNode;
    return;

};


/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    //if LL is empty, we dont return anything
    if (this.head == null) return;

    //if (index=0 i.e. head)
    if (index == 0) {
        this.deleteAtHead()
        return
    }

    //other cases
    let i = 0;
    let prev = null;
    let nodeToBeDel = this.head;
    while (i < index && nodeToBeDel != null) {
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++
    }

    if (i != index) return; // LL doesn't have the required index;


    if (nodeToBeDel == null) return

    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null;
    return;

};



// we seperately create a deleteATHead function for our ease


MyLinkedList.prototype.deleteAtHead = function () {
    if (this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBEDel = this.head;
    this.head = nextHead;
    nodeToBEDel.next = null;


}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */