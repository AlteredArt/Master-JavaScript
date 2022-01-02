//static methods
console.log("static methods")

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    // instance method
    draw(){}
    // static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
// static methods are avail on the class itself not the object instance
const circle = new Circle(3);
console.log(circle)
// static methods are only availe on the class itself
const circle2 = Circle.parse('{"radius": 1}')
console.log(circle2)

class Math2 {
    static abs(value){
        return value
    }
}
console.log(Math2.abs(5))