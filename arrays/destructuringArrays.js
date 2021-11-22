// es6 destructuring allows us to extract data from arrays or objects
// into seperate distinct variables
let c = [100, 200];
let a = c[0];
let b = c[1];
console.log(a, b);


let d = [200, 300];
console.log(d[0], d[1]);

let g = [400, 500];
let [h, i] = g
console.log(h, i);

let fellowship = ["Waffles", "chloe", "jared"]
let [goodCat, badCat, dumbAss] = fellowship;
console.log(dumbAss, goodCat, badCat);

let j = [100, 200, 300, 400, 500]
let [k, ...l] = j
console.log(k, l)