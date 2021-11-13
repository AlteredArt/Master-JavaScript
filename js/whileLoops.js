//while loops
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0 ) console.log(i);
  i++;
}



//do while
let t = 9;
do {
  if ( t % 2 !== 0) console.log(t);
  t++
}while (t<= 5)


// break

let n = 0;
while (n <= 10) {
  if (n === 5) break;
  console.log(n);
  n++;
}


// continue

let m = 0;
while (m <= 10) {
  if (m % 2 === 0) {
  m++;
  continue;
}

console.log(m);
m++;
}