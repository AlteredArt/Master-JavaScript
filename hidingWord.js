function detectWord(str) {
    let wanted = ""
    for (let letter of str) {
        if (letter === letter.toLowerCase()) {
            wanted = wanted + letter
        }
    }
    return wanted
}
function detectWord(str) {
    return [...str].filter(c => c.toLowerCase() === c).join('')
}

function detectWord(str) {
    return str.replace(/[A-Z]/g, '');
}

function detectWord(str) {
    return [...str].filter(item => item == item.toLowerCase()).join("");
}