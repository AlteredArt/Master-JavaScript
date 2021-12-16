//unordered array consisting of consecutive integers
//swap any two elements, find min swaps for array to be sorted
//in: [7,1,3,2,4,5,6] output: 5
//are there duplicates
//can i mutate my original array
//need to move 7 past 1
//in: [1,7,3,2,4,5,6]
//swaps: 1
//in: [1,2,3,7,4,5,6]
//swaps: 2
//in: [1,2,3,4,7,5,6]
//swaps: 3
//in: [1,2,3,4,5,7,6]
//swaps: 4
//in: [1,2,3,4,5,6,7]
//swaps: 5
//set up new array
//find min
//check int index
//if val of index !== index + min
//swap correct val with val at the current index
function minSwaps(arr) {
    console.log('array:', arr)
    let unsorted = [...arr]
    console.log('unsorted array:', unsorted)
    let min = Math.min(...arr)
    console.log('min:', min)
    let swaps = 0
    for (let i = 0; i < unsorted.length; i++) {
        console.log('unsorted length:', unsorted.length)
        if (unsorted[i] !== i + min) {
            console.log('unsorted i:', unsorted[i], i)
            let ind = unsorted.indexOf(i + min, i)
            console.log('ind:', ind)
            let temp = unsorted[i]
            console.log('temp:', temp)
            unsorted[i] = unsorted[ind]
            unsorted[ind] = temp
            swaps++
        }
        return swaps
    }
}

console.log('5:', minSwaps([7, 1, 3, 2, 4, 5, 6]))//5
// console.log('6:', minSwaps([-7, 1, -3, 2, 4, 5, 6]))
// console.log('1:', minSwaps([1, 3, 2, 4]))
// console.log('0:', minSwaps([1, 2, 3]))
// console.log('1:', minSwaps([100, 99, 98, 101]))