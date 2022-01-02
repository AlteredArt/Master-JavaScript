//FibonacciInterative
console.log("Fibonacci Inerative")
const fibonacciInterative =(num) => {
    let arr = [0,1];

for (let i =2; i < num + 1; i++){
    arr.push(arr[i-2] + arr[i-1])
    }
    return arr[num]
}

console.log(fibonacciInterative(3))

//Fibonacci in Dynamic Programmimg
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
const fibonacciDynamic = () => {
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        } else {
            if (n <2){
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}
const fasterFib = fibonacciDynamic();
console.log("Fib Dynamic:", fasterFib(10))