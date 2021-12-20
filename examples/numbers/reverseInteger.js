// reverse an integer
function reverseInt (n) {
    let reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed)*Math.sign(n)
}

console.log(reverseInt(789));
console.log(reverseInt(10829));
console.log(reverseInt(-57));