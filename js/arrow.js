// Arrow Functions
// arrow functions dont create a this object
console.log('arrow function')

// Set time out arrow function
// Wait 1000 ms
setTimeout(() => {
  console.log("3...2...1, Blastoff!")
}, 1000);

// varible saved function
const blastoff = () => {
  console.log("3...2...1, Blastoff!")
}
// Calling the function
blastoff();

// Test this out
this.a = 25;
let print = function() {
  console.log('this.a', this.a);
}

print();

let arrowPrint = () => {
  console.log("this.a in arrowPrint", this.a)
}
// Calling the arrow function
arrowPrint();