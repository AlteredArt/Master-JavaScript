//A boomerang is a V-shaped sequence that is either upright or upside down.
//Specifically, a boomerang can be defined as: sub-array of length 3,
// with the first and last digits being the same and the middle digit being different. 
//Create a function that returns the total number of boomerangs in an array."
console.log('Boomerang')
const boomerang1 = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
//3 boomerangs sub arrays [3,7,3],[1,5,1],[2,-2,2]
const boomerang2 = [1, 7, 1, 7, 1, 7, 1]
//5 boomerang sub array [1,7,1],[7,1,7],[1,7,1],[7,1,7],[1,7,1]
const boomerang3 = [9, 5, 9, 5, 1, 1, 1]
//2 boomerang sub array
const countBoomerangs = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
            count++
        }
    }
    return count
}

console.log('1:', countBoomerangs(boomerang1))
console.log('1:', countBoomerangs(boomerang2))
console.log('1:', countBoomerangs(boomerang3))