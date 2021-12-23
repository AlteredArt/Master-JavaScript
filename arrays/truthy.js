// This function takes an array and returns the number of truthy elements
const arrayMisc = [0,1,2,3, '', 6, null, false, true]

function countTruthy(arrayMisc) {
  let count = 0;

  for (let value of array)
   if (value)
   //If value is true add one to count
    count ++;
    
    console.log("true",count);
}

countTruthy(array);