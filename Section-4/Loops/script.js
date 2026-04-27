// Loops in JavaScript
// Loops are used to repeat a block of code until a specified condition is met. They are useful for performing repetitive tasks without having to write the same code multiple times.

// Types of Loops in JavaScript:
// 1. for loop
// 2. while loop
// 3. do...while loop

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let coding = ["HTML", "CSS", "JavaScript", "Python"];
for (let i = 0; i < coding.length; i++) {
  console.log(coding[i]);
}
// nested for loop
for (let i = 1; i <= 3; i++) {
  console.log("Outer loop: ", i);
  for (let j = 1; j <= 2; j++) {
    console.log("  Inner loop: ", j);
  }
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do...while loop
let num = 10;
do {
  console.log("do while...", num);
  num++;
} while (num <= 5);

let x = 10;

while (x < 5) {
  console.log("while");
}

do {
  console.log("do while");
} while (x < 5);
