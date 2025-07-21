const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter temperature: ", (input) => {
  const value = parseFloat(input);
  const sym = input.trim().toUpperCase().slice(-1);

  if (Number.isNaN(value)) {
    console.log("Invalid temperature value");
  } else if (sym == 'C') {
    const far = (value * 9/5) + 32;
    console.log(`${value}C = ${far.toFixed(2)}F`);
  } else if (sym == 'F') {
    const cel = (value - 32) * 5/9;
    console.log(`${value}F = ${cel.toFixed(2)}C`);
  } else {
    console.log("Please enter the number either C or F");
  }

  rl.close();
});
