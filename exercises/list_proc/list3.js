// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

/*
input: two arrays
output: one array
rules:

option 1: forEach
  create an empty array
  iterate through first array
    for each round (each element)
      iterate through second array
      multiply first element with the element in the second array
      push result to new array
  return new array

option 2: use reduce

  use reduce and a new array


*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(elm1 => {
    arr2.forEach(elm2 => {
      result.push(elm1 * elm2);
    });
  });
  return result.sort((a, b) => a - b);
}

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.reduce((prev, curr) => {
    arr2.forEach(num => {
      prev === undefined ? result.push(curr * num) : prev.push(curr * num);
    });
  }, result);
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]