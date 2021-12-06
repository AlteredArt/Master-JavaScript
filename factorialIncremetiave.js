//Factorial interative
const factorialInterative = (num) => {
    let answer = 1;
    if (num === 2) {
        answer = 2;
    }
    for (let i = 2; i <= num; i++){
        answer = answer * i
    }
    return answer
}

console.log(factorialInterative(5))
//answer = 120