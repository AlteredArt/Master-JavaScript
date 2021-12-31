// Arrow Functions (DONE)
// arrow functions dont create a this object
console.log('Welcome to arrow functions')

// Set time out arrow function ... then wait 1000 ms
setTimeout(() => {
  console.log("3...2...1, Blastoff!")
}, 1000);

// Saving a arrow function into a variable
const blastoff = () => {
  console.log("3...2...1, Blastoff!")
};
// Now call the function you saved in a variable
blastoff();
