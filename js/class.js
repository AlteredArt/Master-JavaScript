// Class
console.log('classes')

class Glass {
// constructor builds the class
  constructor(name, height){
    // this binds it to the variable
    this.name = name;
    this.height = height;
  }
  // This is a function attached to the class as it's being instigated.
  greet(){console.log(`Hello I'm ${this.name}, my height is ${this.height}`);}

}
// Setting the class
let Mary = new Glass("Merry", 4.6)
// Calling the class
Mary.greet();