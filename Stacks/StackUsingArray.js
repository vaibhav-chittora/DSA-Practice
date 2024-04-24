class stack {
    //make array private using #
    #arr
    constructor() {
        //arr will not be accessible outside the stack classs;
        this.#arr = []
    };

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        this.#arr.pop()
    };

    top() {
        return this.#arr[this.#arr.length - 1] //return the last element in the array i.e. top element of stack
    }

    isEmpty() {

        return this.#arr.length == 0
    }

}

let s = new stack();

s.push(10)
s.push(20)
s.push(30)
console.log(s.top());
s.pop()
console.log(s.top());
s.pop()
console.log(s.top());