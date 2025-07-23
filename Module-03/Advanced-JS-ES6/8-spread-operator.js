const array1 = [1, 2,3 ,4];
const array2 = [5, 6,7, 8, 0];
// concatenating two array 
const array3 = [...array1, ...array2]

console.log(array3);
// spread the values to the function 
let min = Math.min(...array3)

console.log(min);
 // Cloning array
const array4 = [...array1]

array4[0]= 100

console.log(array1[0], array4[0]);

