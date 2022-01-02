// palindrome with lower case 
function palindrome(str) {
    let strL = str.toLowerCase()
    let reversed = strL.split('').reverse().join('')
    return strL === reversed;
}
console.log(palindrome('racecar'))
console.log(palindrome('Waffles'))
console.log(palindrome('Racecar'))

// palindrome second solution using every and lower case
function palindrome2(str) {
    let lower = str.toLowerCase();
    return lower.split('').every((char, i) => {
        return char === lower[str.length - i - 1];
    });
}
console.log('.every', palindrome2('racecar'))
console.log('.every', palindrome2('Waffles'))
console.log('.every', palindrome2('Racecar'))