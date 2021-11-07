// let  a = [7,8,9];
// let b=[6, ...a, 10];
// console.log(b);


// use strict es5
// var a = [7,8,9]
// var b = [6].concat(a, [10])
// console.log(b)


// function print(a,b,c) {
//   console.log(a,b,c);
// }
// let z = [1,2,3];
// print(...z)

// function print(...z){
//   console.log(z);
// }
// print(1,2,3);

function print(...z){
    let a =[1,2,3, ...z]
    console.log(a)
  }
  print(4,5,6)