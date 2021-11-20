// Regular
console.log('hello')
//table
console.table(dogs)
// Interpolated
console.log('Hello i am a %s string!', '🍕')
// Styled
console.log('%c I am some great text', 'font-size: 20px; background: red;')
// warning!
console.warn('oh no')
// Error :|
console.error('oh shit')
// Info
console.info("kitties are cool")
// clearing
// console.clear();
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name} is ${dog.age}`)
    console.log(`This is ${dog.name} is ${dog.age}`)
    console.groupEnd(`${dog.name}`)
})
// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data)
    });