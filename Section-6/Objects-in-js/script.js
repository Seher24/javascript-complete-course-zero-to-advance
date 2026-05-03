// Objects in JavaScript are used to store multiple values in a single variable. They are a collection of properties, where each property is defined as a key-value pair. Objects can contain various types of data, including strings, numbers, arrays, and even other objects.

// Creating an Object
const person = {
  firstName: "Seher", //properties are defined as key-value pairs
  lastName: "Siddique",
  age: 25,
};
console.log("Person Object: ", person, typeof person);
// object_name.key;
console.log("First Name: ", person.firstName); // using dot notation
console.log("First Name: ", person["firstName"]); // using bracket notation
// any object can store two things: properties and methods
person.firstName = "Sana"; // we can change the value of a property
console.log("Updated Person Object: ", person);
person.city = "Karachi"; // we can add new properties to an object
console.log("Person Object with new property: ", person);

delete person.age; // we can delete a property from an object
console.log("Person Object after deleting age: ", person);

// Nested Objects
const student = {
  name: "Ali",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Karachi",
    country: "Pakistan",
  },
};
console.log("Student Object: ", student);
console.log("Student's City: ", student.address.city); // accessing nested object property
// checking if a property exists in an object
console.log("Does age exist in student? ", "age" in student);
// for in loop to iterate over object properties
for (let prop in student) {
  console.log(prop + ": " + student[prop]);
}

// creating object using new Object() constructor
const car = new Object();

car.name = "Toyota";
car.model = "Corolla";
car.year = 2020;
console.log("Car Object: ", car);

const book = new Object({
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 300,
});
console.log("Book Object: ", book);
