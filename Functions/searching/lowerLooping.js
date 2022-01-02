//ForOf Loop
function reverse6(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}
console.log('for of ES6', reverse6("Chloe is the best"))




//While
var counterOne = 5
while (counterOne > 0) {
    counterOne--
    console.log("while", counterOne)
}






//while loops
let z = 0;
while (z <= 5) {
    if (z % 2 !== 0) console.log("while", z);
    z++;
}

//Do While
var counterTwo = 0
do {
    counterTwo++
    console.log("do while", counterTwo)
} while ('do while:', counterTwo < 5)


//do while 2
let t = 9;
do {
    if (t % 2 !== 0) console.log("do while 2", t);
    t++
} while (t <= 5)

// break
let n = 0;
while (n <= 10) {
    if (n === 5) break;
    console.log("break in while:", n);
    n++;
}



// continue
let m = 0;
while (m <= 10) {
    if (m % 2 === 0) {
        m++;
        continue;
    }
    console.log("continue in while", m);
    m++;
}




//Switch Case
let role = 'guest';
switch (role) {
    case 'guest':
        console.log("switch", 'Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User')
}


// if else if
function hour(num) {
    if (num >= 6 && num < 12)
        console.log('Good Morning');
    else if (num >= 12 && num < 18)
        console.log('Good Afternoon')
    else
        console.log('Good Night')
}
hour(13)

// if else if
function greet(name) {
    if (name === "Waffles" || name === "Chloe") {
        alert("hello Kitty!")
    } else {
        alert("hmm I don't know you")
    }
}
greet("Chloe")

// if else if
const hello = (firstName, lastName) => {
    if (firstName === "Waffles" && lastName === "Chloe") {
        alert("hello Kitty!")
    } else {
        alert("hmm I don't know you")
    }
}
hello("Waffles", "Chloe")

//If Else If
let role = "guest"
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log("Moderator User")
else console.log('Unknown User');