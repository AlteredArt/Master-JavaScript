//change every letter of the string to the one that follows it and cap the vowels

const letterChanges = str => {

    let newString = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
            return 'a'
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newString = newString.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase())
    return newString;
}

console.log(letterChanges('Wafflez Chloe'))