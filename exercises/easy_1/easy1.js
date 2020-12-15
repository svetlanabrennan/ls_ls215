/*
input: none
output: integers

rules: logs odd numbers from 1 to 99 to the console, each number on its own line

algo:

  create a for loop starting at index 1 until index reaches 99
  console each index if index is an odd number

further explorations:

  another solution: use a while loop
  add option to specify limits of odd numbers to log
*/

// function oddNumbers() {
//   for (let i = 1; i <= 99; i += 1) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// function oddNumbers() {
//   let num = 1;
//   while (num <= 99) {
//     console.log(num);
//     num += 2
//   }
// }

function oddNumbers(start, end) {
  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
}

oddNumbers(10, 145);