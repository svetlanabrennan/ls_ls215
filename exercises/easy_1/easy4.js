/*
input: string
output: string
rules:
  ask for bill total
  ask for tip percentage
  calculate tip amount and store in tip variable
  log the tip amount
  log the total amount (with the tip)
*/

let readline = require("readline-sync");

function tipCalculator() {
  let bill = readline.question("What is the bill? ");
  let tipPercentage = readline.question("What is the tip percentage? ");
  let tipAmount = Number(bill) * Number(tipPercentage / 100);

  console.log(`The tip is $${tipAmount.toFixed(2)}`);
  console.log(`The total is $${(Number(bill) + tipAmount).toFixed(2)}`);
}

tipCalculator();