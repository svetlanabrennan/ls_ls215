// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

/*
input: string
output: array
rules:

  return substring from start of string to end
  sort by shortest to longest

algo:

  split string into array
  iterate through array
    for each chr
    return substr with start = 0 and end = index + 1
  return array

*/

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => str.substr(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]