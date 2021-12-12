// let array = ["may", "april", "august", "september"]

// console.log(array.sort(function (a, b) { return a.length - b.length }))


function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length)
}



sortByLength(["a", "ccc", "dddd", "bb"])
sortByLength(["apple", "pie", "shortcake"])
sortByLength(["may", "april", "september", "august"])
sortByLength([])