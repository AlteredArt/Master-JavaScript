//give first reoccuring character
let array1 = [2,5,1,2,3,5,1,2,4]
let array2 = [2,1,1,2,3,5,1,2,4]
let array3 = [2,3,4,5]

function firstReccuringCharacter(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined;
}


console.log(firstReccuringCharacter(array2))