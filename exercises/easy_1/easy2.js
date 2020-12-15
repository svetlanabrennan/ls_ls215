/*
input: none
output: integers

rules: log even numbers to the console, inclusive (include the 1) and log each number on its own line

algo:
  use a for loop starting at 1
  increment for loop with 1
  if loop is even, log number
*/

function evenNumbers() {
  for (let i = 1; i <= 99; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers();