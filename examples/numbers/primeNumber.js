//Is given number prime(ifloop)
function isPrime (num) {
    if(num === 2){
        return true
    }
    if(num < 2 || !Number.isInteger(num) || !(num%2)){
        return false
    }
    for(let i = 3; i <= num -1; i++){
        if (num % i === 0){
            return false
        }
        return true
    }
}
// prime numbers
// 0=n 1=n 2=y 3=y 4=n 5=y
console.log("Prime Number ifloop", isPrime(3))


// prime numbers
function primeNum(){
    for(let i = 0; i <150; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

console.log(primeNum())
