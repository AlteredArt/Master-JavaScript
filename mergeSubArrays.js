function zipIt(women, men) {
    if (women.length === men.length) {
        return women.map((woman, i) => [woman, men[i]]);
    }
    return `sizes don't match`;
};


const zipIt = (women, men) => {
    if (women.length === men.length) {
        return women.map((woman, i) => [woman, men[i]]);
    }
    return `sizes don't match`;
};


const zipIt = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return "sizes don't match";
    return arr1.map((el, index) => [arr1[index], arr2[index]])
};

function zipIt(w, m) {
    together = []
    if (w.length !== m.length) {
        return `sizes don't match`
    }
    for (i = 0; i < w.length; i++) {
        together.push([w[i], m[i]])
    }
    return together
}