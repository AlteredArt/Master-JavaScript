console.log("Max Character")
//Given a string return the character that is used the most

const str1 = "abcccccccd"   //c
const str2 = 'apple 1231111'    //1
const str3 = 'abc'      //no repeat


function findMaxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log('max char:', findMaxChar(str1))
console.log('max char:', findMaxChar(str2))
console.log('max char:', findMaxChar(str3))