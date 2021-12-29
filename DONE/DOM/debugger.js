// done
// Using a Debugger
function reverse7(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  reverse7('asdf')
// console.log(reverse7('meow meow meow'))

// cd into JS folder
// In terminal run:   node inspect debugger.js
// c or cont to continue
// Enter repl mode by running repl
// Now inspect a object by running it