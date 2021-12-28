// Queue First in - First out data structure
console.log('Queue Data Structures');


class Queue{
// construct the data array
    constructor(){
        this.data = [];
    }
// add method
    add(record){
        this.data.unshift(record);
    }
// remove method
    remove(){
        return this.data.pop();
    }
// peek method to view last in
    peek() {
        return this.data[this.data.length -1];
    }

}
let queueOne = new Queue();
let queueTwo = new Queue();

// weave method to combine 2 queues and return a third
function weave(sourceOne, sourceTwo){
    const q = new Queue();
    
    while(sourceOne.peek() || sourceTwo.peek()){
        if(sourceOne.peek()) {q.add(sourceOne.remove());}
        if(sourceTwo.peek()) {q.add(sourceTwo.remove());}
    }
    return q;
}
