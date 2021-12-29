console.log('remove duplicate');
let array = [1, 2, 5, 2, 1, 8] //[1,2,5,8]
//first example
let b = []
let len = array.length;

for (let i = 0; i < len; i++) {
    if (b.indexOf(array[i]) === -1) {
        b.push(array[i]);
    }
}

console.log(b)


//sotrted

let c = []
let length = array.length;
let sorted = array.sort()
let _temp;

for (let t = 0; t < length; t++) {
    if (array[t] !== _temp) {
        c.push(array[t]);
        _temp = array[t];
    }

}

console.log(c)

//Object
obj = {};

for (let ind of array) {
    obj[ind] = true;
}
let d = Object.keys(obj);

console.log(d);

//Obj one line
let eSet = new Set(array)
console.log(eSet)
//brings back an object
//to array
console.log('set', [... new Set(array)]);