// how to add private properties and methods using es6 symbols and maps
// private methods hide code not needed to help with abstraction
const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius){
        // this.radius = radius;
        // this['radius'] = radius;
        this[_radius] = radius;
    }
    // create a private method by adding another Symbol
    [_draw](){}
}
const c = new Circle(1);
console.log(c.radius)

// use es6 weakMaps to implement private properties and methods
const _shape = new WeakMap();
const _move = new WeakMap();

class Square {
    constructor(shape){
        _shape.set(this, shape);

        _move.set(this, () => {
            console.log('move', this)
        })
    }
    make(){
       _move.get(this)();
       console.log('make');
    }
}
const sq = new Square(2);