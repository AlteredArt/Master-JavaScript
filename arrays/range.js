// range
// takes a min an max arrgument
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
      output.push(i);
    return output;
  }
  const arrayFrom = arrayFromRange(2, 8);
  console.log('range:', arrayFrom);
  
  