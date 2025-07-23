"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _04_class_object_1 = __importDefault(require("./04-class-object"));
const person1 = new _04_class_object_1.default("John", 30);
console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.
