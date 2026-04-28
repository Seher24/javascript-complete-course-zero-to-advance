// functions are reusable blocks of code that perform a specific task. They can be defined once and called multiple times in a program. Functions can take parameters, which are values passed to the function when it is called, and they can return a value as well.

function greet() {
  console.log("Hello, World!");
}
greet(); // calling the function

// PARAMETERS AND ARGUMENTS
function greet1(firstName, lastName) {
  console.log("Hello, " + firstName + " " + lastName + "!");
}
greet1("Seher", "Siddique"); // calling the function with arguments
// if we pass less arguments than the parameters, the missing parameters will be undefined
greet1("Seher"); // lastName will be undefined
// if we pass more arguments than the parameters, the extra arguments will be ignored
greet1("Seher", "Siddique", "Extra Argument"); // Extra Argument will be ignored

// Default Parameters
function sum(x, y = 10) {
  console.log(x + y);
}
sum(5); // 15

// function Return
function add(a, b) {
  return a + b; // it will return the sum of a and b
}
add(5, 10); // 15
let result = add(5, 10); // we can store the returned value in a variable
console.log("Result: ", result);

function fn1(x) {
  function fn2(y) {
    return x + y; // fn2 has access to x because of closure
  }
  return fn2;
}
let res = fn1(5);
console.log("Result: ", res);
res(10); // 15
console.log("Result: ", res(10));
