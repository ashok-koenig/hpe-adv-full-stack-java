"use strict";
function myFunction(firstName, lastName, age) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}
myFunction("John", "Peter", 25);
// Expression function
const myExpressionFunction = function (firstName, lastName, age) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
};
myExpressionFunction("John", "Doe", 30);
// Arrow function
const myArrowFunction = (firstName, lastName, age) => {
    return `First Name: ${firstName}, Last Name: ${lastName}`;
};
console.log(myArrowFunction("Jane", "Doe", 28));
