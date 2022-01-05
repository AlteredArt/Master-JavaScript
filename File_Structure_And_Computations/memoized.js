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

