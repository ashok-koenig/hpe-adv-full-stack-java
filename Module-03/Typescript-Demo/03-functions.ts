function myFunction(firstName: string, lastName: string, age: number): void {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

myFunction("John", "Peter", 25); 

// Expression function
const myExpressionFunction = function (firstName: string, lastName: string, age: number): void {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

myExpressionFunction("John", "Doe", 30);

// Arrow function
const myArrowFunction = (firstName: string, lastName: string, age: number): string => {
    return `First Name: ${firstName}, Last Name: ${lastName}`;
}

console.log(myArrowFunction("Jane", "Doe", 28));