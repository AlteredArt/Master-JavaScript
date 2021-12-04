// Array of arrays show length of all arrays, the array item, length of array
let twoD = [[1,2,3,4,5,6,7],
            [8, 10, 5 ,7, 3, 22, 6, 42],
            [123, 54, 12, 11, 9, 15]];

            let rows = twoD.length;
            for(let i=0; i<rows; i++){
              let items =twoD[i].length;
              for(let t=0; t<items; t++){
console.log("num of arrays",twoD.length,"array item",twoD[i][t],"array length", items);
              }
            }
