console.log('Anagrams')
//helper function
function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
//anagram
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;

}

console.log('1:', anagrams("rail safety", 'fairy tales'))   //true
console.log('2:', anagrams("RAIL! SAFETY!", 'fairy tales'))       //true
console.log('3:', anagrams("Hi there", 'Bye there'))       //false


//alternative solution
function betterAnagram(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

//cleanup helper function
function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log('1:', betterAnagram("rail safety", 'fairy tales'))   //true
console.log('2:', betterAnagram("RAIL! SAFETY!", 'fairy tales'))       //true
console.log('3:', betterAnagram("Hi there", 'Bye there'))       //false
