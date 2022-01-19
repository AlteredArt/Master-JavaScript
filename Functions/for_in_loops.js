// For in loops
// iterating an object
const person = {
    name: 'Mosh',
    age: 30
  };
  
  for (let key in person)
  console.log(key, person[key]); // key value pair
  


  // * Iterating an Array
  const colors = ['red', 'blue', 'green'];

  for (let index in colors)
  console.log(index, colors[index])
  
  
  // for of ideal for arrays
  for (let color of colors)
    console.log(color);