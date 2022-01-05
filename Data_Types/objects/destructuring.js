// Destructuring
const character = {
    player: "Waffles",
    experience: 100,
    speed: true
}
// old assigning
// const player = character.player
// const experience = character.experience
// const speed = character.speed
// Object After Destructuring
const { player, experience } = character
let { speed } = character
console.log(player, experience, speed)
// another example of Destructuring an Object
const alias = "Chloe";
const obj = {
    [alias]: "hello",
    [1 + 2]: "hi"
}
console.log(obj[alias])
//another example 
const a = "simon"
const b = true
const c = {}
const newObj = { a, b, c }
console.log({ newObj })