/*
input: integer
output: integer
rules:

  difference between square of sum of first input integers AND sum of square of first input integers
  input is 3
  square of sums = (1 + 2 + 3) ** 2 = 36
  sum of squares = (1**2) + (2**2) + (3**2) = 1 + 4 + 9 = 14
  36 - 14 = 22

questions:
  will there be negative inputs?

test cases:

sumSquareDifference(3);      // 22
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
sumSquareDifference(0); // 0

algo
  create a variable named squareSums
  creaet a variable sumsSquares

  create an array that is filled with 1 up to input number (subprocess)
    create an array with a length of input number => Array(num)
    fill the array with fill() method and map() by returning the current index + 1;
  get the sum of array (use reduce), multiple by ** 2 and assign value to squareSums
  map over array, for each element multiple by **2 then reduce array to get sum and assign value to sumSquares
  return squareSums - sumSquares
*/

function sumSquareDifference(num) {
  let array = Array(num).fill().map((num, idx) => idx + 1);

  let squareSums = array.reduce((prev, curr) => prev + curr, 0) ** 2;
  let sumSquares = array.map(digit => digit ** 2).reduce((prev, curr) => prev + curr, 0);

  return squareSums - sumSquares;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(0)); // 0