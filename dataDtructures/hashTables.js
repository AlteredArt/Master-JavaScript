console.log('Hash Tables in javascript')
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    // the underscore in the function name makes it a private function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }
    // write out set method O(1)
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        } else { this.data[address].push([key, value]) }
        return this.data
    }
    // writing our get method O(1)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
    // loop through keys
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray;
    }
}
const myHashTable = new HashTable();
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2)
myHashTable.get('apples');

console.log('myhashtable:', myHashTable)
console.log('hasykey:', myHashTable._hash('grapes'))
console.log("myhashtable:", myHashTable)
console.log('set:', myHashTable.set('grapes', 1000))
console.log('set:', myHashTable.set('apples', 50))
console.log('set:', myHashTable.set('oranges', 100))
console.log('set:', myHashTable.set('pineapples', 75))
console.log("myhashtable:", myHashTable)
console.log("get:", myHashTable.get('apples'))
console.log("keys:", myHashTable.keys())