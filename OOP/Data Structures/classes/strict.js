// enable strict mode
'use strict';
// constructor function
const Circle = function(){
    this.draw = function() {console.log(this);}
};
const c1 = new Circle();
// method call this points to the method function on the object
c1.draw();

const draw = c1.draw;
// function call this points this to the global object
// with use strict prevents use from modifying the global object
draw();

class Square {
    move(){
        console.log(this)
    }
}
const sq = new Square();
const move = sq.move();
console.log(move);