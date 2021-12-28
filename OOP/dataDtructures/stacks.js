console.log('Stacks in Javascript')

// start by creating a stack class with a constructor function
class Stack {
    // constructor function allows us to initialize an array
    constructor() {
        this.data = [];
    }
    // Our push method
    // In Queue we would use unshift() instead of push()
    push(record) {
        this.data.push(record);
    }
    // Our pop method
    pop() {
        return this.data.pop();
    }

    // The peek method allows us to view our last record without removing it
    peek() {
        return this.data[this.data.length - 1];
    }

}

let stackOne = new Stack;
stack1.push(1)
stack1.push(4)
stack1.pop()
stack1.push(3)
stack1.peek()