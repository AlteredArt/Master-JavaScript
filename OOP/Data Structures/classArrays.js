// Arrays (Lists) organize items sequentially. smallest footprint of any structure. 
// The array below is a 4*4 = 16 bytes of storage
const strings = ['a', 'b', 'c', 'd'];

console.log(strings[1]) //access O(1) of array strings
console.log(strings.push('e'))   //push O(1) 
console.log(strings.pop());     //pop O(1)
console.log(strings.unshift('x'))   //unshift O(n)
console.log(strings.splice(2, 0, "aliens")) // splice O(n)
// Static arrays are fixed in size
// A dynamic arrays allow us to copy and build a new array at a new location
// Arrays in js are just objects with array based keys

class MyArray {
    constructor(){
        this.length =0;
        this.data = {};
    }
    
    get(index){
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length -1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i <this.lenght -1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.data[this.length -1]
    }
}

const newArray = new MyArray();

console.log('push', newArray.push('a'))
console.log('get', newArray.get(0))
console.log('array', newArray)
console.log('push', newArray.push('b'))
console.log('array', newArray)
console.log('pop', newArray.pop());
console.log('push', newArray.push('b'))
console.log('array', newArray)
console.log('delete', newArray.delete(1))