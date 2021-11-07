object literal objects are made of properties
var dog = {"name":"Woody",type:"dog"};
var cat = {"name":"Waffles", type: "cat"};
console.log(dog);
console.log(cat);

var petNames = ["Woody", "Bob"];
console.log(petNames);
var pets = [dog, cat];
console.log(pets)

add to an array
pets.push({"name": "Chloe", type:"cat"})
console.log(pets[2])

add to an object
cat.age = 2;
dog["age"] = 12;
console.log(pets);

pets[0].age = 14;
pets[2]["age"] = 6;
pets[1].hungry = true;
console.log(pets);

nested loops
let bigHero = {characters: [
  {name:"hiro", voice:"Ryan Potter"},
  {name:"Baymax", voice:"Scott Adsit"},
  {name:"Fred", voice:"T.J. Miller"}
]};
console.log(bigHero)

let chars = bigHero.characters
let chars = bigHero['characters']
  for(let i = 0, len=chars.length; i<len; i++){
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]["voice"]);
  }

let person = {
  name: "Josh",
  age: 30
};
//dont notation
person.name = "John";
//bracket notation
let selection = "name";
person[selection]= 'Mary';
console.log(person.name)