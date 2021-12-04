const sum = arr => {
    let sum = 0
    for (let i of arr) {
        if (i.toString().length === 2) {
            sum += i;
        }
        // console.log(i.toString().length)
    }
    return sum;
}




console.log(sum([1, 10, 10, -10, 2]));