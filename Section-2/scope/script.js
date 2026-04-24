// scope
// Scope is the area of the code where a variable is defined and can be accessed. There are three types of scope in JavaScript: global scope, function scope, and block scope.
// Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

var x = "Hello Everyone";

function greet() {
  console.log(x); // Output: Hello Everyone
}

greet(); // Output: Hello Everyone
console.log(x); // Output: Hello Everyone

// Function scope: Variables declared inside a function are in the function scope and can only be accessed within that function.

function greetfunc() {
  var fs = "Hello Everyone from function scope";
  console.log(fs); // Output: Hello Everyone from function scope
}

greetfunc(); // Output: Hello Everyone from function scope
console.log(fs); // Error: fs is not defined (because fs is in function scope)

// Block scope: Variables declared inside a block (e.g., inside an if statement or a for loop) are in the block scope and can only be accessed within that block.

function greetblock() {
  if (true) {
    let bs = "Hello Everyone from block scope";
    console.log(bs); // Output: Hello Everyone from block scope
  }
  console.log(bs); // Error: bs is not defined (because bs is in block scope)
}
greetblock(); // Output: Hello Everyone from block scope
console.log(bs); // Error: bs is not defined (because bs is in block scope)
