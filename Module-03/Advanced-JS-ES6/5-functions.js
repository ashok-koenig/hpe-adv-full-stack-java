// Creating a funtion with function keyword
function sum(n1, n2){
    console.log(n1 + n2);    
}
sum(10,20)
// function with return vvalue
function subtract(n1 , n2){
    return n1-n2
}

console.log(subtract(100, 20));
// Expression function 
const multiply = function(n1, n2){
    return n1 * n2
}

console.log(multiply(10, 10));
// Arrow function
// const divid = (n1, n2) =>{
//     return n1/n2
// }
const divid = (n1, n2) => n1/n2

console.log(divid(100, 10));
