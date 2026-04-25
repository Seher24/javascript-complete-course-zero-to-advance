# 🚀 JavaScript Learning Journey  

## 📚 Section 1: Introduction to JavaScript  

This section covers the fundamentals of JavaScript and how to write your first program.

---

## 📌 Topics Covered  

- What is JavaScript  
- Interactive vs Dynamic Websites  
- Why JavaScript is important  
- Uses of JavaScript  
- How to add JavaScript to a webpage  
  - Inline JavaScript  
  - Internal JavaScript  
  - External JavaScript  

---

## 💻 First JavaScript Program  

### Example:
```javascript
alert("Hello, World!");
Other ways to display output:
console.log("Hello, World!");
document.write("Hello, World!");
🛠️ How to Run JavaScript
Create an index.html file
Create a script.js file
Link the JavaScript file:
<script src="script.js"></script>
Run the HTML file in your browser
```
### Learning Outcome

By the end of this section, I am able to:

Understand the basics of JavaScript
Differentiate between interactive and dynamic websites
Write and run a simple JavaScript program
Link JavaScript with HTML

## 📚 Section 2: Core JavaScript Concepts  
## 📌 Topics Covered

### 🧾 1. Variables
- What are variables?
- var, let, const
- Variable declaration & initialization
- Naming rules
- Block scope (let, const)

---

### 🔢 2. Data Types
- Primitive Data Types:
  - string
  - number
  - boolean
  - null
  - undefined
  - bigint
  - symbol

- Reference Data Types:
  - object
  - array
  - function

- typeof operator
- Dynamic typing in JavaScript

---

### 🌍 3. Scope
- Global Scope
- Function Scope
- Block Scope
- Scope differences in:
  - var
  - let
  - const

---

## 🧠 Key Concepts

✅ JavaScript is **dynamically typed**  
✅ `let` and `const` are **block-scoped**  
✅ `var` is **function-scoped**  
✅ Arrays & functions are actually **objects**  
✅ `typeof null === "object"` (known bug ⚠️)

---

## 🎯 Learning Outcome

By the end of this section, I am able to:

✔️ Understand how variables work  
✔️ Identify and use different data types  
✔️ Understand scope and variable behavior  
✔️ Write cleaner and predictable JavaScript code  

---

## 📘 SECTION 3 — OPERATORS IN JAVASCRIPT

---

### 📌 What are Operators?

Operators are symbols used to perform operations on operands.

👉 Operands = values or variables

```js
console.log(10 + 20); // 30

👉 + is the operator
👉 10 and 20 are operands

📚 Types of Operators in JavaScript
Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
String Operators
🔢 1. Arithmetic Operators

Used for mathematical calculations.

let sum = 5 + 3;        // 8
let difference = 10 - 4; // 6
let product = 2 * 6;     // 12
let quotient = 15 / 3;   // 5
let remainder = 17 % 4;  // 1
let result = 2 ** 4;     // 16
🧾 2. Assignment Operators

Used to assign values to variables.

let x = 5;

x += 3; // 8
x -= 2; // 6
x *= 4; // 24
x /= 3; // 8
x %= 5; // 3
x **= 2; // 9
🔼 3. Increment / Decrement Operators

Used to increase or decrease value by 1.

➕ Increment (++)
➖ Decrement (--)
📌 Prefix
let a = 10;

console.log(++a); // 11
console.log(a);   // 11

console.log(--a); // 10
console.log(a);   // 10
📌 Postfix
let b = 10;

console.log(b++); // 10
console.log(b);   // 11

console.log(b--); // 11
console.log(b);   // 10
⚖️ 4. Comparison Operators

Return true or false.

a < b   // less than
a > b   // greater than
a <= b  // less than or equal
a >= b  // greater than or equal
a == b  // equal (loose)
a != b  // not equal
a === b // strict equal
a !== b // strict not equal

Example:

const a = 10;
const b = 20;

console.log(a < b);   // true
console.log(a === b); // false
🧠 5. Logical Operators
✔️ AND (&&)
true && true // true
✔️ OR (||)
true || false // true
✔️ NOT (!)
!true // false
📊 Operator Precedence
let result = 2 + 3 * 4;
console.log(result); // 14
🔁 Associativity
⬅️ Left to Right
4 - 2 - 1 // 1
➡️ Right to Left
2 ** 3 ** 2 // 512
```
# 🎯 Key Takeaways
Operators perform actions on values
Comparison returns boolean
Logical operators control conditions
Precedence decides execution order
Associativity decides execution direction
