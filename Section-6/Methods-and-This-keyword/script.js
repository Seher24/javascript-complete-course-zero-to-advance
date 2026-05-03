// Javascript object methods

// JavaScript objects can also have methods, which are functions that are defined as properties of an object. Methods allow us to perform actions on the data stored in the object. Here are some examples of object methods:

const person = {
  firstName: "Seher",
  lastName: "Siddique",
  greet: function greet() {
    // We can also use the 'this' keyword inside a method to refer to the current object. This allows us to access other properties of the object from within the method.

    console.log("Hello " + this.firstName);
  },
  getFullName: function getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());

function greet1() {
  console.log("Hello Stack Overflow!");
}
person.greeting = greet1; // assigning the greet1 function to the greeting property of the person object
person.greeting(); // calling the greeting method
person.greet(); // calling the greet method
console.log("Person Object with methods: ", person);
