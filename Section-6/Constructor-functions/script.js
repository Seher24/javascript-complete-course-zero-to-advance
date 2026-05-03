// Constructor functions are a special type of function in JavaScript that are used to create objects. They are typically defined with a capitalized name to distinguish them from regular functions. When called with the `new` keyword, a constructor function creates a new object and sets the `this` keyword to refer to that object.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   we can also add methods to the constructor function, which will be available to all instances of the constructor function
  this.getfullName = function getFullName() {
    return this.firstName + " " + this.lastName;
  };
}

// creating an object using the constructor function
const person1 = new Person("Seher", "Siddique");
console.log("Person 1: ", person1);

// we can create multiple objects using the same constructor function
const person2 = new Person("Shahid", "Khan");
console.log("Person 2: ", person2);

console.log("Person 2 full name: ", person2.getfullName());
// we can also add methods to the constructor function's prototype, which will be shared by all instances of the constructor function
person1.age = 25; // adding a property to person1
console.log("Person 1 with age: ", person1.age);

// adding a method to the constructor function's prototype
person2.greet = function greet() {
  console.log("Hello " + this.firstName);
};
person2.greet(); // calling the greet method on person2
