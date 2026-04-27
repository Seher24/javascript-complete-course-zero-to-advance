// control flow statements are used to control the flow of execution in a program based on certain conditions. They allow you to make decisions and repeat actions.
// control flow statements in JavaScript:

// Conditional Statements:
// 1. if statement
let age = 20;
if (age > 18) {
  console.log("YOU ARE AN ADULT.");
}

let country = "Pakistan";
let age2 = 25;
if (country == "Pakistan" && age2 >= 18) {
  console.log("YOU ARE AN ADULT IN PAKISTAN.");
}
// 2. if...else statement
let age3 = 16;
if (age3 >= 18) {
  console.log("YOU ARE AN ADULT.");
} else {
  console.log("YOU ARE NOT AN ADULT.");
}

// 3. if...else if...else statement
let age4 = 70;
if (age4 < 18) {
  console.log("YOU ARE A MINOR.");
} else if (age4 >= 18 && age4 < 65) {
  console.log("YOU ARE AN ADULT.");
} else {
  console.log("YOU ARE A SENIOR CITIZEN.");
}
// 4. switch statement
let dayName = 2;
switch (dayName) {
  case 1:
    dayName = "Monday";
    console.log("Monday");
    break;
  case 2:
    dayName = "Tuesday";
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
    break;
}
console.log("The day is: ", dayName);

// Ternary Operator
let age5 = 20;

let isAdult = age5 >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult);
