//reverse a string with a for loop
function reverse(str){
    if (!str || str.length < 2 || typeof str !== "string"){
      return 'Hmm thats not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    }
  console.log('reversed backwards:', backwards);
    return backwards.join('')
  }
  console.log('forloop:',reverse("hi my name is waffles"));
  
  
//simpler syntax es6
  function reverse2(str) {
    return str.split('').reverse().join('')
  }
  console.log('es6:', reverse2('you are a punk'));
  
//es6 syntax using arrow functions
  const reverse3 = str => str.split('').reverse().join('');
  console.log('es6 arrow:', reverse3('es6 syntax'));
  
//using the spread operator
  const reverse4 = str => [...str].reverse().join('');
  console.log('spread:', reverse4('es6 syntax'));
  

// for of loop
  function reverse5(str){
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
  }
  console.log('for of loop:', reverse5("Chloe is the best"))

  // using reduce
  function reverse6(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  console.log('reduce:', reverse6('meow meow meow'))