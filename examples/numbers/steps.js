//write a function that accepts a positive number 
//console log a step shape
//with n levels using the # character

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

steps(5)


//alternative solution
function steps2(t, rowx = 0, stairx = '') {
    if (t === rowx) {
        return;
    }
    if (t === stairx.length) {
        console.log(stairx);
        return steps(t, rowx + 1);
    }

    const add = stairx.length <= rowx ? '?' : ' ';
    steps(t, rowx, stairx + add);
}

console.log('steps2:', steps2(6))