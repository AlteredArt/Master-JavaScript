console.log("Recursive")
//Factorial recursion
const factorialRecursive = (num) => {
    if (num === 2){
        return 2;
    }
    return num * factorialRecursive(num -1);
}

console.log(factorialRecursive(5))

//Fibonacci Recursice
const fibonacciRecursive = (num) => {
    if(num < 2){
        return num;
    }
    return fibonacciRecursive(num -1) + fibonacciRecursive(num -2);
}

console.log(fibonacciRecursive(8))