// Classes are the templates for creating an object.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  changeFirstName(newFirstName) {
    this.firstName = newFirstName;
  }
}
const person1 = new Person("Seher", "Siddique");
person1.changeFirstName("Shahid");
console.log("Person 1: ", person1);
