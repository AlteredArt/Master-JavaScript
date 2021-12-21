// Arrays are numbered lists with indexes
  const colors = ['red', 'blue', 'green'];
  console.log("an array", colors);
//ES6 syntax, less errors than a for loop.
  for (let index in colors)
    console.log('for in:', index, colors[index])

// for of ideal for arrays
//again ES6 syntax, can be used in objects
  for (let i of colors)
    console.log('for of:', i, colors[i]);

//use strict es5 for concat
  var b = [6].concat(colors, [10])
  console.log("concat:", b)
// contacting
  console.log("concat:", colors.concat(["meow"]))

//ES6 Spread Operator
//Spread Operator in Arrays
  let c = ["yellow", ...colors, 'teal'];
  console.log("spread in:", c);


//spread in a function
  function print(...z) {
    let a = [1, 2, 3, ...z]
    console.log("spread in:", a)
  }; 
  print(4, 5, 6);

// properties
console.log("length of array:", colors.length); // length of array
console.log("last index of array:", colors[colors.length - 1]); //last index of array
console.log("array index:", colors[2]); // index of array
//adding or removing
//add to end of array
console.log("array push:", colors.push('Orange'), colors);
//pop remove las from array
console.log("array pop:", colors.pop());
// unshifting from an array, add to beginning
colors.unshift("C3PO");
console.log("array unshift:", colors);
//shifting an array, remove from beginning
colors.shift("R2D2");
console.log("array shift:", colors);

// sorting an array
console.log("array sort alpha:", colors.sort()); //sorts by alpha code only for strings
//includes in an array
console.log("includes:", colors.includes("luke")); //true or false values
