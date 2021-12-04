// takes an array and returns the number of truthy elements
const array = [0,1,2,3, '', 6, null, false, true]
function countTruthy(array) {
  let count = 0
  for (let value of array)
   if (value)
    count ++;
    console.log("true",count);
}
 countTruthy(array)