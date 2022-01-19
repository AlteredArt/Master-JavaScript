// Looping an array using an hire order function
const array = [1, 2, 3, 41, 26]


// A for each, needs a new array because it doesn't make it's own array
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log("foreach:", double)

//foreach again
let forEach = array.forEach((item, index) => console.log('forEach2:', item, index))// console.log("foreach:", forEach)



// for each loop, convert all the names to lower case besides thorin
let dwarves = ["Bifur", "Bofur", "Bombur", "Fifi", "kildi", "oin", "Glorin", "Thorin", "Balin", "Dwalin", "Nori", "Dori"];
dwarves.forEach((item, index) => {
    if (item === "Thorin") {
        item = item.toUpperCase();
    } else {
        item = item.toLowerCase();
    }
    console.log("forEach", index, item);
})



//map, map creates a new altered array
const mapArray = array.map(num => num * 2)
console.log("map:", mapArray)

//maps challenge
let lengths = [3, 7, 5]
let multiple = 8
const scale = (multiple) => {
    return lengths.map(item => item * multiple);
};
console.log("map func:", scale(8))





//filter
const filterArray = array.filter(num => num < 5 || num > 40)
console.log("filter:", filterArray)




//find, finds the first element that applies and returns it
const findArray = array.find(num => num < 5 && num > 1)
console.log('find:', findArray)



// reduce, reduces array to a single element
const reduceArray = array.reduce((acc, num) => {
    return acc + num
}, 0)
console.log("reduce:", reduceArray)

//reduce 2 array to object
// Sum up the instances of each of these into an object
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sumup = data.reduce((obj, item) => {
    if (!obj[item]) { obj[item] = 0; }
    obj[item]++
    return obj;
}, {});
console.log('reduce:', sumup)




// Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const alpha = people.sort((lastone, nextone) => {
    //destructure the first and last name into splitting them with a comma
    const [alast, afirst] = lastone.split(', ')
    const [blast, bfirst] = nextone.split(', ')
    return alast > blast ? 1 : -1;
})
console.log('sort:', alpha)


//mapping and filtering an API
//insert into browser at website and call de
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'))



//an array ob objects
//
///
///

const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
];


//filter, the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.born >= 1550 && inventor.born < 1600)
console.log('filter:', fifteen)

//Map Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log('map:', fullName)

//Sort, the inventors by birthdate, oldest to youngest
//if else loop
// const orderd = inventors.sort(function(fp,sp){
//   if(fp.born > sp.born){
//     return 1;
//   } else {
//     return -1;
//   }
// })
const ordered = inventors.sort((fp, sp) => fp.born > sp.born ? 1 : -1)
console.log('sort:', ordered)

// Reduce, How many years did all the inventors live all together?
//for loop
// let totalYears = 0;
// for ( let i = 0; i < inventors.length; {
//   totalYears += inventors[i].born
// }
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.born);
}, 0)
console.log('reduce:', totalYears)

//Sort the inventors by years lived
const oldest = inventors.sort((lg, ng) => {
    const lastGuy = lg.passed - lg.born;
    const nextGuy = ng.passed - ng.born;
    return lastGuy > nextGuy ? -1 : 1;
})
console.table(oldest)


//Some and Every higher order methods
const otherPeople = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];



//Some, is at least one person 19 or older?
const isAdult = otherPeople.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19
})
console.log('some:', { isAdult })




//Every, is everyone 19 or older?
const allAdults = otherPeople.every(person => ((new Date())
    .getFullYear()) - person.year >= 19);
//see the difference in wrapping output in object
console.log('every:', allAdults)



//Find, and find index higher order functions
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


// Find is like filter, but instead returns just the one you are looking for
const comment = comments.find(comment => (comment.id === 823423))
console.log('find:', { comment })


// Array.prototype.findIndex()
// Find the comment with this ID & delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423)
console.table(comments)
console.log({ index })
comments.splice(index, 1)
console.table(comments)

























//ES10
//Flat
const array = [1, 2, [3, 4, [5]]]
console.log("flat:", array.flat(2))
console.log("spread:", ...array)

//concat
const concat = (...arrays) =>
    arrays.reduce((result, arr) => result.concat(arr), []);

//Flat Map
jurassicPark = [[1, 2], 4, 5, [6, 7[8, 9]]]
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + [3])
console.log('flat map:', jurassicParkChaos)


//From Entries
userProfile = [['commanderTom', 23], ['private johnson', 40]]
console.log('from entries:', Object.fromEntries(userProfile))

//ES6
// Currying (converting a func that takes multiple args into a func that takes them one at a time)
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log("curried:", curriedMultiply(4)(5))

//Compose
const compose = (f, g) => (a) => f(g(a));

//function expression (annon func)
var sayBye = function () {
    console.log('anon func:', "Say Bye");
}
sayBye();