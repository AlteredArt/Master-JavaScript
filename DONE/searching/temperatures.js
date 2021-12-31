function tempConversion(c) {
    const f = (c * 9 / 5 + 32).toFixed(2)
    const k = (c + 273.15).toFixed(2)
    return +k > 0 ? [+f, +k] : 'Invalid'
}

function tempConversion(celsius) {
    const resultArr = [];
    const f = celsius * (9 / 5) + 32;
    const k = celsius + 273.15;
    const numF = parseFloat(f.toFixed(2));
    const numK = parseFloat(k.toFixed(2));
    if (numF <= -459.69 && numK <= -0.01) {
        return 'Invalid';
    }
    resultArr.push(numF);
    resultArr.push(numK);
    return resultArr;
}

function tempConversion(celsius) {
    if (celsius < -273.15) return 'Invalid'
    let f = parseFloat((celsius * 9 / 5 + 32).toFixed(2))
    let k = parseFloat((celsius + 273.15).toFixed(2))
    return [f, k]
}