// Object destructuring is a convenient way to extract values from objects and assign them to variables. It allows us to unpack properties from objects into distinct variables, making our code cleaner and more readable. Here are some examples of object destructuring:
const Person = {
  firstName: "Seher",
  lastName: "Siddique",
  age: 25,
};
// Destructuring an object
const { firstName, lastName, age = 18 } = Person;
console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);
console.log("Age: ", age); // if age is not present in the object, it will default to 18
// Destructuring with renaming variables
const { firstName: fname, lastName: lname } = Person;
console.log("First Name: ", fname);
