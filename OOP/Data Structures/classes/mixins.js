//Mixins
function mixIn(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('walking');
    }
}

const canSwim = {
    swim: function () {
        console.log('swim')
    }
};

function Person() { }


mixIn(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person)

function Goldfish() {
}

mixIn(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);