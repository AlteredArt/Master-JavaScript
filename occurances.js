// counting occurences
const occurances = [1,2,3,4,4,5]

function countOccurances(array, searchElement){
  // let count = 0;
  // for (let element of array)
  //   if(element === searchElement)
  //     count++;
  // return count;

// with reduce
return array.reduce((accumulator, current)=>{
  const occurance = (current === searchElement) ? 1 : 0;
  return accumulator + occurance;
},0);
}
console.log('count occurances', countOccurances(occurances, 4));