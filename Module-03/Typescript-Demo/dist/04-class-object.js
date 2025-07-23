"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.default = Person;
// const person1 = new Person("John", 30);
// console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.
