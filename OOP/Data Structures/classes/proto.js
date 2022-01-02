function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}
// in the beging circle Circle.prototype.constructor = Circle
// as in new Circle.prototype.constructor() => new Circle();
// with this circle inherits from shap instead of object base
// write a extend function with 2 params child and parent or prototype and reset constructor
function extend (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
// so we must rest the constructor
    Child.prototype.constructor = Circle;
}

function Circle(radius, color) {
//    calling the super constructor 
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

// overwritting methods
Circle.prototype.duplicate = function(){
    console.log('duplicate circle');
}

Circle.prototype.draw = function(){
    console.log('draw');
}
// now create a new shape that inherits
function Square(size){
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes)
shape.duplicate();
//  use inheritance for a circle
const s = new Shape();
const c = new Circle(1, 'red');