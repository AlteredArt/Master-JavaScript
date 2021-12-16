// FizzBuzz
// divisible by 3 => fizz
// divisible by 5 => Buzz
// divisible by 3 & 5 => fizzBuzz
// not divisible => input
// not a number => 'message'
// FizzBuzz(ifloop)
function fizzBuzz(input) {
    if (typeof input !== 'number')
      return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
      return "FizzBuzz";
    if (input % 3 === 0)
      return 'Fizz';
    if (input % 5 === 0)
      return "Buzz";
    return input;
  }
  console.log("Fizzbuzz if", fizzBuzz("allen"))
  console.log('Fizzbuzz if', fizzBuzz(15))
  console.log('Fizzbuzz if', fizzBuzz(7))
  
  //if else if
  function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        return "fizzbuzz"
      } else if (i % 3 === 0) {
        return 'fizz'
      } else if (i % 5 === 0) {
        return "buzz"
      } else {
        return i
      }
    }
  }
  console.log("Fizzbuzz elseif", fizzbuzz("allen"))
  console.log('Fizzbuzz elseif', fizzbuzz(15))
  console.log('Fizzbuzz elseif', fizzbuzz(7))