// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

/*
input: array
output: integer
rules:

  create a new variable to store sum
  let start = 1;
  iterate through array
  for each element
    use slice with 0 as the start and index + 1 as the end on the input array
    reduce the sliced array and push result to result variable
  return result
*/

function sumOfSums(arr) {
  let result = 0;
  arr.forEach((_, idx) => {
    result += arr.slice(0, idx + 1).reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  });
  return result;
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35