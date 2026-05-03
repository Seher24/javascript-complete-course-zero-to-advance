function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.gender = "Female"; // adding a property to the prototype of the constructor function
const person1 = new Person("Seher", "Siddique");

console.log("Person 1: ", person1.gender);
Person.prototype.greet = function greet() {
  console.log("Hello " + this.firstName);
};
person1.greet(); // calling the greet method on person1

Person.prototype = { gender: "Male" };
const person2 = new Person("Shahid", "Khan");

console.log("Person 2: ", person2.gender);
