/*
input: array
output: array

rules:

  rotate an array by moving 1st element to end of array
  don't modify original array

  if input is not array return undefined
  if input is empty return empty array

examples:

[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
"" => undefined
[] => []

algo: 
  check if input is an array, if not return undefined
  check if input is an empty array, if so return []  
  create a copy of the array using slice - by slicing at index 1
  push the last element of the input array to the copied array
  return copied array
*/

"use strict";

function rotateArray(input) {
  if (!Array.isArray(input)) {
    return undefined;
  }

  if (input.length === 0) {
    return [];
  }

  let result = input.slice(1);
  result.push(input[0]);
  return result;
}

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]