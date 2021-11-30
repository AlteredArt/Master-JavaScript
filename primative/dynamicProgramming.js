console.log("Dynamic Programming")

function addTo80(n) {
    return n + 80
}
console.log("add to:", addTo80(6))

//memoized
function memoizedAddTo80() {
    let cache = {};
    //closures
    return function(n){
    if(n in cache){
        return cache[n];
    } else {
        cache[n] = n +80;
        return cache[n];
    }
}
}
const memoized = memoizedAddTo80();
console.log('memoized:', memoized(5));
console.log('memoized:', memoized(10));

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