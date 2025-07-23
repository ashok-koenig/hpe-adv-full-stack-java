// Rest paramters
const sum = (intial, ...numbers)=>{
    let result = intial;
    for(let value of numbers){
        result +=value;
    }
    return result;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40, 50));