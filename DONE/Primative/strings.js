var string1 = "freeCodeCamp is the best place to learn"
var string2 = "frontend and backend development"
console.log("charAt()", string1.charAt(1))
console.log("charCodeAt()", string1.charCodeAt(1))
console.log("concat()", string1.concat(string2))
console.log("endsWith()", string1.endsWith("to"))
console.log("fromcharCode()", String.fromCharCode(114))
console.log("includes()", string2.includes("end"))
console.log("indexOf()", string2.indexOf("end"))
console.log("lastIndexOf()", string2.lastIndexOf("end"))
console.log("match()", string2.match(/end/g))
console.log("repeat()", string1.repeat(3))
console.log("replace()", string2.replace(/end/g, "END"))
console.log("search()", string2.search("end"))
console.log("slice()", string2.slice(2, 4))
console.log("split()", string2.split(" "))
console.log("startsWith()", string2.startsWith("f"))
console.log("substr()", string2.substr(2, 4))
console.log("substring()", string2.substring(2,4))
console.log("toLowerCase()", string2.toLowerCase())
console.log("toUpperCase()", string2.toUpperCase())
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