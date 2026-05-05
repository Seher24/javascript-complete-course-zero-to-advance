// Getters and Setters are special methods that allow us to define how to access and modify the properties of an object. They are defined using the get and set keywords respectively.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set changeFirstName(newFirstName) {
    this.firstName = newFirstName;
  }
}

const person1 = new Person("Seher", "Siddique");
console.log("Person 1: ", person1.fullName);
person1.changeFirstName = "Shahid";
console.log("Person 1: ", person1.changeFirstName);
// class expression
const Person2 = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
};
const person2 = new Person2("Seher", "Siddique");
console.log("Person 2: ", person2.getName());
