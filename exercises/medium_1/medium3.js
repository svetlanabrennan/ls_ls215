/*
input: number
output: number

rules:

  start with first number in input number and move it to the end
  take the resulting number, skip the first number again and move it to the end
  repeat until you do this for length of numbers - 2

(7)35291 => 35291(7)
3(5)2917 => 32917(5)
32(9)175 => 32175(9)
321(7)59 => 32159(7)
3215(9)7 => 32157(9)

questions:
  will the input be negative
  will the input always contain numbers

algo:

  option 1:
  turn number into string and split at chr and assign to array variable
  use a for loop with index starting at 0
  for each loop do this:
    find the digit to move (subprocess)
      use splice to remove the digit at the current index
    removed found digit from array
    combine the resulting array with the found digit (make sure digit is at the end of combined array)
  join array at chr, turn into number and return

  option 2:
    turn number into string and split at chr and assign to array variable
    use a for loop with index starting at 0
    for each loop do this:
      find the first part of the array that's unchanged
        use slice with 0 for the first argument and index for second argument
      find the second part of the array that's also unchanged
        use slice with index + 1 as the first and only argument
      find the part of the array that will move to the end
        use slice with index as first argument and 

*/

// solution 1
// function maxRotation(numbers) {
//   let arr = String(numbers).split("");

//   for (let idx = 0; idx - arr.length; idx += 1) {
//     let foundDigit = arr.splice(idx, 1);
//     arr = arr.concat(foundDigit);
//   }
//   return Number(arr.join(""));
// }

// solution 2
function maxRotation(numbers) {
  let arr = String(numbers).split("");
  for (let idx = 0; idx - arr.length; idx += 1) {
    let part1 = arr.slice(0, idx);
    let part2 = arr.slice(idx + 1);
    let part3 = arr.slice(idx, idx + 1);
    arr = [].concat(part1, part2, part3);
  }
  return Number(arr.join(""));
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845