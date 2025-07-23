export default class Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

export const PI=3.4
// const person1 = new Person("John", 30);

// console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.