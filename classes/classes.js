console.log('classes')
// person class
class Person {
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

// circle class
class Circle {
  constructor(radius){
      this.radius = radius;
      this.move = function(){}
  }
  draw(){
      console.log('draw a circle')
  }
}

const c1 = new Circle(1);
c1.draw();
console.log(c1)