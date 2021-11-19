//ES9

//Object spread operator
const animals = {
    tiger: 25,
    lion: 5,
    mokey: 2,
    bird: 48
}


function objectSpread(p1, p2, p3) {
    console.log('fn tiger:', p1)
    console.log('fn lion:', p2)
    console.log('fn rest:', p3)
}

const { tiger, lion, ...rest } = animals;

objectSpread(animals)
