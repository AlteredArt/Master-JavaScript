// arrow functions dont create a this object
console.log('arrow function')

// setTimeout(() => {
//   console.log("3...2...1, Blastoff!")
// }, 1000);

// const blastoff = () => {
//   console.log("3...2...1, Blastoff!")
//   }
// blastoff();

this.a = 25;
let print = function() {
  console.log('this.a', this.a);
}

print();

let arrowPrint = () => {
  console.log("this.a in arrowPrint", this.a)
}

arrowPrint();