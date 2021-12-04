//Given 2 array create a function that tells a user true or false
//if the arrays have any common items

//2 params return true or false
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'h']
function containsCommonItems(arr1, arr2) {
    for(let i=0; i < arr1.length; i++ ){
        for(let j=0; j <arr2.length; j++) {
            if (arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}
console.log("common1:",containsCommonItems(array1, array2))
//O(a*b)


//better solution
function containsCommonItems2 (arr1, arr2) {
let map = {};
for (let a=0; a <arr1.length; a++) {
    if(!map[array1[a]]) {
        const item = array1[a];
        map[item] = true
    }
}
    for(let b = 0; b < arr2.length; b++) {
        if(map[array2[b]]){
            return true
        }
    }
return false
}
console.log("common2:",containsCommonItems2(array1, array2))
//O(a+b)

//best solution
function containsCommonItems3 (arr1, arr2) {
   return arr1.some(item => arr2.includes(item))
    }
console.log("coomon3:", containsCommonItems3(array1, array2))