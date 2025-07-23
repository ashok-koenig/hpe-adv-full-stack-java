// Method1: Interface for defining the structure of an object
// interface Course {
//     title: string;
//     duration: number;
// }

// Method2: Type alias for defining the structure of an object
type Course = {
    title: string;
    duration: number;
    price?: number; // Optional property
    } 

// Object in TypeScript
const course1: Course = {
  title: "TypeScript Course",
  duration: 30,
}
// Accessing properties of an object
console.log(course1.title)
console.log(course1['duration'])
