console.log('weave queue')

class Queue {
    constructor() {
        this.data = [];
    }

    add(entry) {
        this.data.unshift(entry);
    }

    remove() {
        return this.data.pop()
    }
    peek() {
        return this.data[this.data.length - 1]
    }
}

const queue1 = new Queue();
queue1.add(2)
queue1.add(5)
queue1.add(3)
queue1.peek()

const queue2 = new Queue();
queue2.add(4)
queue2.add(7)
queue2.add(8)
queue2.peek()


function weave(source1, source2) {
    const q = new Queue();

    while (source1.peek() || source2.peek()) {
        if (source1.peek()) {
            q.add(source1.remove());
        }
        if (source2.peek()) {
            q.add(source2.remove());
        }
    }
    return q;
}