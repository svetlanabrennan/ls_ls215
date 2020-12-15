/*
input: 2 integers
output: integer
rules:

  take the last n (2nd input) of the 1st input digits, 
  move that last n digit all the way to the end of the input number

example:
rotateRightmostDigits(735291, 1);      // 735291
73529(1) => 73529(1)

rotateRightmostDigits(735291, 4);      // 732915
73(5)291 => 73291(5)

(7)35291, 6 => 35291(7)

algo:

  convert 1st input integer and assign to string variable
  split string variable at chr
  find the nth digit of the array (subprocess)
  use splice to remove the nth digit and add spliced digit to the end of the array
  join array and turn into number and return
*/

function rotateRightmostDigits(numbers, n) {
  let arr = String(numbers).split("");
  let toMove = arr.splice(arr.length - n, 1);
  let result = arr.concat(toMove);
  return Number(result.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917