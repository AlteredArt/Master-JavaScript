// turning a string into an array start with a string
const pizza = 'pizza';

// es5 .split("") takes a string and makes it an array
const slicedPizza1 = pizza.split("");
console.log('es5 string to array', slicedPizza1)

// es6 using spread instead
const slicedPizza2 = [...pizza];
console.log('es6 spread string to array', slicedPizza2)

// Array.from() creates an array from a string
const slicedPizza3 = Array.from(pizza);
console.log('array.from string to array', slicedPizza3)


//ES7
const square = (x) => x ** 2
console.log(square(8))

const cube = (x) => x ** 3
console.log(cube(9))


//ES8
let string1 = "Waffles"
//padding start
console.log('pad start:', string1.padStart(10))
//padding end
console.log('pad end:', string2.padEnd(10))



//ES10
//TrimStart & Trim End
userEmail1 = "          waffles@gmail.com"
userEmail2 = "waffles@gmail.com              "
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())


//reverse the characters in a string
function reverseString(w) {
    return w.split("").reverse().join("");
}
console.log(reverseString("hello"));

//capitalize the first letter in a string
const CapitalizeName = [
    ...string1[0].toUpperCase(),
    ...string1.slice(1).toLowerCase()
].join('')
console.log(CapitalizeName);





//Non working example of ES^ comparison operators, needs babel
// const areTrue = (a, b) => ["neither", 'first', 'second', 'both'][a + b * 2]
// function areTrue(a, b) {
//     return a && b ? 'both'
//         : ? 'first'
//             : ? 'second'
//                 : 'neither'
// }
// console.log(areTrue(0, 4))


// String Templates
console.log("string templates")
const name = "Waffles"
const status = "fine"

// old way
const greeting = "Hello " + name + " you seem to be doing " + status + " !"
console.log("old way", greeting)

// new way
const bestGreeting = `"Hello ${name} this is ${status}"`
console.log("new way", bestGreeting)

// function
function greet(name = "", age = 30, pet = "cat") {
    return `Hello ${name = "Tim"} you are ${age = 24}, nice ${pet}`
}
console.log("template function", greet())