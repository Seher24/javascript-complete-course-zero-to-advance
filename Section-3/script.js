// operators in JavaScript

// Operators in JavaScript are Symbols.
// They are used to perform operations on operands (values and variables).

// Types of Operators in JavaScript:
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators

// Arithmetic Operators
let sum = 10 + 5; // Addition
console.log("Sum: ", sum);
let difference = 10 - 5; // Subtraction
console.log("Difference: ", difference);
let product = 10 * 5; // Multiplication
console.log("Product: ", product);
let quotient = 10 / 5; // Division
console.log("Quotient: ", quotient);
let remainder = 10 % 3;
console.log("Remainder: ", remainder);

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("x after addition: ", x);
x -= 3; // x = x - 3
console.log("x after subtraction: ", x);
x *= 2;
console.log("x after multiplication: ", x);
x /= 4;
console.log("x after division: ", x);

// increment and decrement operators
// PREFIX
// let y = 5;
// console.log("Prefix increment: ", ++y);
// console.log(y); //6
// console.log("Prefix decrement: ", --y);
// console.log(y); //5

// POSTFIX
let z = 5;
console.log("Postfix increment: ", z++);
console.log(z);
console.log("Postfix decrement: ", z--);
console.log(z);

// Comparison Operators
let a = 10;
let b = 20;
console.log("a > b: ", a > b); // false
console.log("a < b: ", a < b); // true
console.log("a === b: ", a === b); // false

// Logical Operators
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID: ", isAdult && hasID); // false
console.log("isAdult || hasID: ", isAdult || hasID);
console.log("!isAdult: ", !isAdult); // false

// String Operators
let str1 = "Hello";
let str2 = "World";
let greeting = str1 + " " + str2; // Concatenation
console.log(greeting);

// Operators Precedence
let result = 10 + 5 * 2; // Multiplication has higher precedence than addition
console.log("Result: ", result); // 20

// Operators Associativity
// left to right
let result2 = 10 - 5 + 2; // Subtraction and addition have the same precedence, so they are evaluated from left to right
console.log("Result2: ", result2); // 7
// right to left
let result3 = 10 - (5 + 2); // Parentheses have the highest precedence, so they are evaluated first
console.log("Result3: ", result3); // 3
