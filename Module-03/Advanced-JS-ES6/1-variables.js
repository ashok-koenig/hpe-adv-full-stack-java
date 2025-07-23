var globalVariable = "This is global variable"
console.log(globalVariable);
// Simple block
{
    let blockVariable = "This is block variable"
    console.log(blockVariable);   
    blockVariable = "We can change the value of let variable"
    console.log(blockVariable);   
    const constVariable = "This is constant"
    console.log(constVariable);
    // constVariable = "Unable to modify"
}
// console.log(blockVariable);   
// console.log(constVariable);