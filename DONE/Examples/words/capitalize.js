//capitalize the first letter in each 
function capitalize(str) {
    let words = []

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

console.log(capitalize('a short sentence'))    //A Short Sentence 
console.log(capitalize('a lazy fox'))    //A Lazy Fox
console.log(capitalize('look, it is working!'))    //Look, It Is Working! 

//better solution

function anotherCap(str) {
    let result = str[0].toUpperCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}

console.log(anotherCap('a short sentence'))    //A Short Sentence 
console.log(anotherCap('a lazy fox'))    //A Lazy Fox
console.log(anotherCap('look, it is working!'))    //Look, It Is Working! 