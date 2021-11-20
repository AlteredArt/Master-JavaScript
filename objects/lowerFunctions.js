// interating an object
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log("let in", key, person[key]);




// nested loops
let bigHero = {
    characters: [
        { name: "hiro", voice: "Ryan Potter" },
        { name: "Baymax", voice: "Scott Adsit" },
        { name: "Fred", voice: "T.J. Miller" }
    ]
};
console.log(bigHero)

let chars = bigHero.characters
// let chars = bigHero['characters']
for (let i = 0, len = chars.length; i < len; i++) {
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]["voice"]);
}


// loop through objects must be an object
var data2 = {
    name: "jared",
    last: "matta",
    other_name: "lion",
    online_places: {
        website: "hhtp://jared.com",
        school: "flatiron.com",
        facebook: "jared.facebook.com",
        twitter: "jared.twitter.com",
        linkedIn: "jared.linkedin.com"
    }
};

for (key in data2.online_places) {
    console.log('keys of data 2', key)
}