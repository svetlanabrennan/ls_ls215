/*
input: string
output: string

rules:
  get an integer greater than 0
  get an compute type
  log the sum with the compute type

algo:

  ask for integer and store in integer variable
  ask for compute type and store in compute variable

  if the compute is equal to "s", then call the sum function
  if the compute is equal to "p", then call the product function
  log the result
*/

let readline = require("readline-sync");

function consIntegers() {
  let integer = readline.question("Please enter an integer greater than 0: ");
  let compute = readline.question("Enter `s` to compute the sum or 'p' to compute the product. ");
  let total;

  if (compute === "s") {
    total = sum(Number(integer));
    console.log(`The sum of the integers between 1 and ${integer} is ${total}.`);
  } else {
    total = product(Number(integer));
    console.log(`The prodct of the integers between 1 and ${integer} is ${total}.`);
  }
}

function sum(num) {
  let value = 0;
  for (let i = 1; i <= Number(num); i += 1) {
    value += i;
  }
  return value;
}

function product(num) {
  let value = 1;
  for (let i = 1; i <= Number(num); i += 1) {
    value *= i;
  }
  return value;
}

consIntegers();