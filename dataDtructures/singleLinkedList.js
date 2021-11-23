console.log('linked lists')

class Node {
    //remember the constructor function is called 
    //every time we create a new instance of a class
    //constructor will take in two properties
    // one the data
    // two the next node along the chain
    //in case a next node is not passed in we default next to null
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insert the first data and create a new instance of node
    insertFirst(data) {
        // this.head prevents us from over writing the first node
        this.head = new Node(data, this.head);
    }
    // check the size of the linked list by number of nodes
    size() {
        let counter = 0;
        let node = this.head;
        // our while loop checks to see if there is a head node assigned
        while (node) {
            // immediately increase the counter because we know one node exists at this point
            counter++;
            // here we will look at the next node and determine if it's another node or the tail which is null.
            node = node.next;
        }
    }
    // get the first node
    getFirst() {
        return this.head
    }
    // get the last node
    getLast() {
        // start by saying if there is no head node return null and exit the loop
        if (!this.head) {
            return null;
        }
        // here we will bring in our loop used in the size function
        let node = this.head;
        // here we are saying if node.next doesn't exist we must be at the tail now and return this node
        while (node) {
            if (!node.next) {
                return node;
            }
            // otherwise update the node and re run the while loop
            node = node.next;
        }
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }


    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1 || this.getLast());
        const node = new Node(data, previous.next);
        previous.next = node;
    }
    // clear the linked list
    clear() {
        // this sets the head to null and destroys the link list structure
        this.head = null;
    }

    // get at a certain node takes in index as a parameter
    getAt(index) {
        // start with a counter and setting node to the head
        let counter = 0
        let node = this.head;
        // start a while loop that takes our node variable and compares our counter to the index param
        while (node) {
            if (counter === index) {
                // if its the same return the node
                return node;
            }
            // if not increase the counter and check the next node on the next time through
            counter++;
            node = node.next;
        }
        // if we ask for an index that is not a node in the list simply return null / no node at index x
        return null;
    }
}


function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}
const nodeOne = new Node(5);
const list = new LinkedList();