// sting to lower case in console.log
var string1 = "freeCodeCamp is the best place to learn     "
var string2 = "frontend and backend development"
//using double single quotes
console.log('double singles:', 'This isn\'t very nice')
//getting index of a string
console.log("charAt:", string1.charAt(1))
//getting char code of an index
console.log("char CodeAt:", string1.charCodeAt(1))
//concat a string
console.log("concat:", string1.concat(string2))
//ends with
console.log("endsWith:", string1.endsWith("to"))
// grabbing letter from char code
console.log("from char Code:", String.fromCharCode(114))
//includes
console.log("includes:", string2.includes("end"))
//get the index of
console.log("indexOf:", string2.indexOf("end"))
//get last index of
console.log("lastIndexOf:", string2.lastIndexOf("end"))
//match to a word
console.log("match:", string2.match(/end/g))
//repeat a string
console.log("repeat:", string1.repeat(2))
//replace in a string
console.log("replace:", string2.replace(/end/g, "END"))
//search in a string
console.log("search:", string2.search("end"))
//slice a string
console.log("slice:", string2.slice(2, 4))
//split a string to an array
console.log("split:", string2.split(" "))
//starts with boolean
console.log("startsWith:", string2.startsWith("f"))
//make a sub string
console.log("substr:", string2.substr(2, 4))
//make a substring
console.log("substring:", string2.substring(2, 4))
//to lower case
console.log("toLowerCase:", string2.toLowerCase())
//to upper case
console.log("toUpperCase:", string2.toUpperCase())
//trim
console.log("trim()", string1.trim())