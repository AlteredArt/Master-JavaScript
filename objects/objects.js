Object.keys(obj)
Object.values(obj)
Object.entries(obj)

// For in loops
// object literal objects are made of properties
var dog = { "name": "Woody", type: "dog" };
var cat = { "name": "Waffles", type: "cat" };
var pets = [dog, cat];
console.log('dog object:', dog);
console.log('cat object:', cat);
console.log('onj destruc:', pets)
//dont notation
dog.name = "John";
console.log(dog.name)
//bracket notation
let selection = "name";
dog[selection] = 'Mary';
console.log(dog.name)

// add to an object
pets.push({ "name": "Chloe", type: "cat" })
console.log('push to object:', pets, pets[2])

// spread
const newObject = { ...dog }
console.log('spread:', newObject)


// add to an object
cat.age = 2;
dog["age"] = 12;
pets[0].age = 14;
pets[2]["age"] = 6;
pets[1].hungry = true;
console.log('add to object:', pets);





// variable of data has and object with an array
var data = {
    name: "jared",
    last: "matta",
    other_name: "lion",
    online_places: [
        { website: "hhtp://jared.com" },
        { school: "flatiron.com" },
        { facebook: "jared.facebook.com" },
        { twitter: "jared.twitter.com" },
        { linkedIn: "jared.linkedin.com" },
    ],
    goals: ["work out", "eat less"],
    shout: function () {
        console.log("AHHHH")
    }
};

console.log('data object', data)
console.log('name', data.name)
console.log('online_places 1', data.online_places[1])
console.log("goals 1", data.goals[1])
console.log('shout function', data.shout())
// change name
data.name = 'Rico'
console.log('new name', data.name)
// delete something only works on the object
delete (data.other_name)
// manipulating arrays in objects using splice
// deletes the first object in the array
// data.online_places.splice(0,1)

// replace to array with splice
data.online_places.splice(0, 1, { "exampleKey": "exampleData" })
// push to array with push
data.online_places.push({ "lastKey": "lastText" })
// complex looping
for (let i = 0; i <= data.online_places.length; i++) {
    for (key in data.online_places[i]) {
        console.log(i, data.online_places[i])
    }
}



//An Array of Objects
var list = [
    {
        username: "waffles",
        password: "Waffles1"
    },
    {
        username: "Chloe",
        password: "Chloe2"
    }
]

console.log("array of objects:", list[0].username)