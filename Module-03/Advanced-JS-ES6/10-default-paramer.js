function calculate(price, quantity=1, discount=0){
    return (price * quantity) - discount
}

console.log(calculate(10, 5, 5));
console.log(calculate(10, 5));
console.log(calculate(10));