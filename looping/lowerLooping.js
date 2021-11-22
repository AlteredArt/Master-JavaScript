var todos = ["brush teeth!", "feed Waffles!", "Pet Chloe"]


//For Loop
for (var i = 0; i < todos.length; i++) {
    console.log('for loop:', todos[i], i)
}




//For Loop on a 2 Dimension Array
let twoD = [[1, 2, 3, 4],
[8, 10, 5, 7, 3],
[123, 54, 12, 11]];

let rows = twoD.length;
for (let i = 0; i < rows; i++) {
    let items = twoD[i].length;
    console.log("two D array & length", i, items)
    for (let t = 0; t < items; t++) {
        console.log("2D item", twoD[i][t]);
    }
}
