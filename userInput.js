const readLine = require("readline");

// creating the interface for the input and output
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// taking the input from command line
rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    const sum = parseInt(num1) + parseInt(num2);
    console.log("The sum of two numbers are:", sum);
    // close the interface of input and output
    rl.close();
  });
});
