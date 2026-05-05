// class inheritance is a fundamental concept in object-oriented programming that allows a new class (called a child class or subclass) to inherit

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName); // calling the constructor of the parent class
    this.jobTitle = jobTitle;
  }
  getEmployeeDetails() {
    return this.getFullName() + " is a " + this.jobTitle;
  }
}
const employee1 = new Employee("Seher", "Siddique", "Software Engineer");
console.log("Employee 1: ", employee1);
console.log(employee1.getFullName());

// method overriding is a feature of class inheritance that allows a child class to provide a specific implementation of a method that is already defined in its parent class. This is useful when the child class needs to modify or extend the behavior of the parent class's method.

class Manager extends Employee {
  constructor(firstName, lastName, jobTitle, department) {
    super(firstName, lastName, jobTitle); // calling the constructor of the parent class
    this.department = department;
  }
  getEmployeeDetails() {
    return (
      this.getFullName() +
      " is a " +
      this.jobTitle +
      " in the " +
      this.department +
      " department."
    );
  }
}

const manager1 = new Manager("Shahid", "Khan", "Manager", "Sales");
console.log("Manager 1: ", manager1);
console.log(manager1.getEmployeeDetails());
