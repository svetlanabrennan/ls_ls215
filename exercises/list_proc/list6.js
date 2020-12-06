// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise.

/*
  // create an emty result array
  // split string into array - use shorthand
  // iterate through the input string
  // for each elememt, use substr to get a substring of array with start being the current index and end being the end of the array
  // pass this substring to leadingSubstrings function
  // push return to result array
  // flat array and return

*/

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => str.substr(0, idx + 1));
}

function substrings(string) {
  let result = [];
  [...String(string)].forEach((chr, idx) => {
    result.push(leadingSubstrings(string.substr(idx, string.length)));
  });
  return result.flat();
}

console.log(substrings('abcde'));;

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]