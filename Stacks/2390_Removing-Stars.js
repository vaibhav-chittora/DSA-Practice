//Implement stack using arrays

class Stack {
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
        //return the last element in the array i.e. top element of stack
        return this.#arr[this.#arr.length - 1]
    }

    isEmpty() {
        return this.#arr.length == 0
    }

}

var removeStars = function (s) {
    //create a new stack
    let st = new Stack();
    let i = 0;

    while (i < s.length) {
        //when str != *, we push elements to the stack from string;
        if (s[i] != '*') {
            st.push(s[i]);
        }
        //if str = * && stack is not empty --> we remove topmost element from the stack
        else if (s[i] === '*' && !st.isEmpty()) {
            st.pop();
        }
        i++;
    }

    let result = "";
    //till the time stack is not empty
    while (!st.isEmpty()) {
        //pick top elemnt
        let ch = st.top();
        // remove top from stack
        st.pop();
        //store in result
        result = ch + result;

    };

    //we have to return string;
    return result;

};