// break // continue

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // it will exit the loop when i is 3
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log("Current iteration: ", i);
  if (i === 3) {
    console.log("Skipping iteration for i = ", i);
    continue; // it will skip the current iteration when i is 3 and continue with the next iteration
  }
  console.log(i);
}
