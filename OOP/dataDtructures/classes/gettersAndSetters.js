// getters and setters in es6 classes
const _area = new WeakMap();

class Square {
    constructor(area){
        _area.set(this, area);
    }
    get area(){
        return _area.get(this);
    }

    set area(value) {
        if (value <= 0) throw new Error('invalid area')
        _area.set(this, value);
    }
}

const s1 = new Square(5); 
console.log(s1)
console.log("square area", s1.area)


// use getters to access variables
function Circle (radius){
    this.radius = radius;
    let = defaultLocation = {x:0, y:0};
    this.getDefaultLocation = function(){
        return defaultLocation
    };
    this.draw = function(){
        console.log("draw");
    };
// define a getter and setter
    Object.defineProperty(this, 'defaultLocation', {
         get: function() {
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('Invalid Location');
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.draw();
// invalid location error
circle.defaultLocation = 1