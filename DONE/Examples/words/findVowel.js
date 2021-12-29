console.log('find vowel')

function findVowels(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}

console.log(findVowels('Hi There!'))    //3
console.log(findVowels('Why do you ask?'))    //4
console.log(findVowels('Why?'))    //0

//reg ex 
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}

console.log(vowels('Hi There!'))    //3
console.log(vowels('Why do you ask?'))    //4
console.log(vowels('Why?'))    //0