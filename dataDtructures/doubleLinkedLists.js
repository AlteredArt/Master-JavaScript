console.log('linkedlist')

class Node {
    constructor(value) {
        this.value = value,
            this.next = null,
            //double
            this.prev = null
        //
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
}


const myLikedList = new DoubleLinkedList(10);
myLikedList.append(5)
myLikedList.append(16)
myLikedList.prepend(1)
console.log(myLikedList.printList())
myLikedList.insert(2, 99)
console.log(myLikedList.printList())
myLikedList.insert(20, 88)
console.log(myLikedList.printList())
myLikedList.remove(2)
myLikedList.remove(2)
console.log(myLikedList.printList())
myLikedList.reverse()
console.log(myLikedList.printList())