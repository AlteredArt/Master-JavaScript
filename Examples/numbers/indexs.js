//
// let points = [10,20,30];
//
// let addOne = (element) => {
//   return element +1;
// }
//
// points = points.map(addOne);
// console.log(points)


// arrow map function
// let points = [10,20,30];
//
// points = points.map(e => {
//   return e + 1
// });
// console.log(points);

// simplified arrow map function
// let points = [10,20,30];
//
// points = points.map(e => e + 1);
// console.log(points);


// Scaling maps challenge
// let lengths = [3,7,5]
// let multiple = 8
//
// const scale = (multiple) => {
//   return lengths.map(item => item * multiple);
// };
//
// console.log(scale(8))


// filter method / reduces array to a single exception
// let isPassing = (grade) => {
//   return grade >= 70;
// }
// let scores = [90, 85, 67, 72, 46, 99, 92];
//
// let passing = scores.filter(isPassing);
// console.log(passing)



// filter with shortened arrow function

// let scores = [90, 85, 67, 72, 46, 99, 92];
//
// let passing = scores.filter(item => item >= 70);
// console.log(passing)

// filtering challenge
const average = [6, 15.7, 9, 18, 22.1, 9.2, 4];

const highlight = (score) => {
  return average.filter(score => score >= 15);
}
console.log(highlight())



// recude, some, keys, and values()