console.log('array chunking')

//Given an array and chunk size, divide the array into many sub arrays
function chunk(array, size) {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }
    return chunked
}

//self calling function 
const chunks = ((array, size) => {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }
    return chunked
})([1, 4, 12, 3, 2, 6, -9, 0], 3)

console.log('2:', chunk([1, 2, 3, 4], 2))    //[[1,2], [3,4]]
console.log('2:', chunk([1, 2, 3, 4, 5], 2))    //[[1,2], [3,4], [5]]
console.log('3:', chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))    //[[1,2,3], [4,5,6], [7,8]]
console.log('5:', chunk([1, 2, 3, 4, 5], 4))    //[[1,2,3,4], [5]]
console.log('10:', chunk([1, 2, 3, 4, 5], 10))    //[[1,2,3,4,5]


function chunk2(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size
    }
    return chunked;
}

console.log('while2:', chunk2([1, 2, 3, 4], 2))    //[[1,2], [3,4]]
console.log('while2:', chunk2([1, 2, 3, 4, 5], 2))    //[[1,2], [3,4], [5]]
console.log('while3:', chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3))    //[[1,2,3], [4,5,6], [7,8]]
console.log('while5:', chunk2([1, 2, 3, 4, 5], 4))    //[[1,2,3,4], [5]]
console.log('while10:', chunk2([1, 2, 3, 4, 5], 10))    //[[1,2,3,4,5]


