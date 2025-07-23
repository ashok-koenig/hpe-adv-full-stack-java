function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says woof!`);
};

const d1 = new Dog("Buddy");
const d2 = new Dog("Max");
d1.bark(); // Buddy says woof!
d2.bark(); // Max says woof!
