// These are strings
console.log("These are strings and string manipulation");

// String inside of a variable
var string1 = "freeCodeCamp is the best place to learn"
var string2 = "frontend and backend development"
console.log("charAt()", string1.charAt(1)) //Get character at given position
console.log("charCodeAt()", string1.charCodeAt(1)) //Get character code at given position
console.log("concat()", string1.concat(string2)) //Concat two string variables
console.log("endsWith()", string1.endsWith("to")) //Checks to see if the string ends in a argument
console.log("fromCharCode()", String.fromCharCode(114)) //Get string from given char code
console.log("includes()", string2.includes("end")) // Checks if parameter is in string
console.log("indexOf()", string2.indexOf("end")) // Gives the index of parameter
console.log("lastIndexOf()", string2.lastIndexOf("end")) // Gives last position of parameter
console.log("match()", string2.match(/end/g)) // Match parameters 
console.log("repeat()", string1.repeat(3)) // Repeats a string 3 times
console.log("replace()", string2.replace(/end/g, "END")) // Replaces parameter with argument
console.log("search()", string2.search("end")) // Searches for parameter
console.log("slice()", string2.slice(2, 4)) // Slice a given string at point parameters
console.log("split()", string2.split(" ")) // Split a string
console.log("startsWith()", string2.startsWith("f")) // Find words that start with parameters
console.log("substr()", string2.substr(2, 4)) // Makes another string out of the indexes between parameters
console.log("substring()", string2.substring(2,4)) // Makes another string out of the indexes between parameters
console.log("toLowerCase()", string2.toLowerCase()) // Makes parameter Lower Case
console.log("toUpperCase()", string2.toUpperCase()) // Makes parameter Upper Case
var string3 = "       Subscribe now!      "
console.log("trim()", string3.trim())

// reverse the characters in a string
function reverseString(w) {
    return w.split("").reverse().join("");
}
console.log(reverseString("hello"));

// capitalize the first letter in a string
const name = 'samantha';
const CapitalizeName = [
  ...name[0].toUpperCase(),
  ...name.slice(1)
].join('')
console.log(CapitalizeName);