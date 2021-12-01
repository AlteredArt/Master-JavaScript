console.log('min or max')
//works for strings
console.log('strings:', Math.min(1, 4, 5, 6, 7, 8))
console.log('strings:', Math.max(1, 4, 5, 6, 10, 7, 8))
//for arrays
console.log('array:', Math.min(...[1, 4, 5, 6, 7, 8]))
console.log("array:", Math.max(...[1, 4, 5, 6, 7, 8]))
//functions
const array = [2, 5, 6, 10, 4, 12]
console.log('func:', Math.min.apply(null, array))
console.log('func:', Math.max.apply(null, array))

let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
        max = array[i];
        console.log("setting max to " + max)
    }
}

let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        console.log("setting min to " + min);
    }
}

console.log(min)
console.log(max)


//extra
function minMax(arr) {
    arr.sort(function (a, b) { return a - b });
    return [arr[0], arr[arr.length - 1]];

}

//2
function minMax(arr) {
    arr = arr.sort(function (a, b) {
        return a - b
    })
    return [arr[0], arr[arr.length - 1]]
}

//3
function minMax(arr) {
    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    returnArr.push(min);
    returnArr.push(max);

    return returnArr;
}


// get the max with and without reduce
const numList = [1,2,3,28,7,4,5,6]
const max = getMax(numList);

function getMax(array) {
  if (array.length === 0) return undefined;
  // let max = array[0];
  // for (let i= 1; i < array.length; i++)
  //   if (array[i] > max)
  //   max = array[i];
  //   return max;
  return array.reduce((acc, curr) => (acc > curr) ? acc : curr);
}
console.log('max number',max)



// reducing an array
const cost = [1,4,5,6]
let sum = 0;
for (let n of cost)
  sum += n;
console.log(sum, 'sum')
// reduce method
const add = cost.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(add, 'reduce')

//give first reoccuring character
let array1 = [2,5,1,2,3,5,1,2,4]
let array2 = [2,1,1,2,3,5,1,2,4]
let array3 = [2,3,4,5]

function firstReccuringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined;
}


console.log(firstReccuringCharacter(array2));