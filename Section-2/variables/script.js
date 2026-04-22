// Variables in JavaScript
// var
var X = 5;
alert(X); // Output: 5
console.log(X); // Output: 5

if (X > 2) {
  var y = 10;
  console.log(y); // Output: 10
}
console.log(y + 1); // Output: 11 (because var is function-scoped, not block-scoped)

// let
let A = 5;
alert(A); // Output: 5
console.log(A); // Output: 5

if (A > 2) {
  let B = 10;
  console.log(B); // Output: 10
}
console.log(B + 1); // Error: B is not defined (because let is block-scoped)

// const
const PI = 3.14;
alert(PI); // Output: 3.14
console.log(PI); // Output: 3.14
PI = 3.14159; // Error: Assignment to constant variable (because const cannot be reassigned)
