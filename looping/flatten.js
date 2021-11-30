


//flatten arrays
const flatten = (arr) => {
    return arr.reduce((a, b) => {
        return a.concat(b)
    })
}

//flatten 2
const flatten2 = arr => {
    return [].concat.apply([], arr);
}

//flatten 3
// const flatten3 = array => {
//     function add(a, b, c, d) {
//         return a + b + c + d;

//     }
//     const array = [1, 2, 3, 4]
//     console.log(add(...array));
// }

console.log(flatten([[1, 2], [3, 4], [5, 6], [7]]))
console.log(flatten2([[1, 2], [3, 4], [5, 6], [7]]))
console.log(flatten3())