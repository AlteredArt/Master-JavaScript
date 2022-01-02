console.log('classes')
// person class
class Person {
  //Construct the 
  constructor(name, height){
    this.name = name;
    this.height = height;
  }
  greet(){
    console.log(`Hello I'm ${this.name}, my height is ${this.height}!`);
  }
}
let p1 = new Person("Merry", 5.3)
p1.greet();

//Example number 2
// Circle class
class Circle {
  constructor(radius){
    // Constructs a class of circus with parameters of radius and a method of move.
      this.radius = radius;
      this.move = function(){}
  }
  //Draw is a added method
  draw(){
      console.log('draw a circle')
  }
}

const c1 = new Circle(1);
c1.draw();
console.log(c1)


console.log('classes')

class Glass {
  constructor(name, height){
    this.name = name;
    this.height = height;
  }
  greet(){
    console.log(`Hello I'm ${this.name}, my height is ${this.height}`);
  }
}
let Mary = new Glass("Merry", 4.6)
Mary.greet();