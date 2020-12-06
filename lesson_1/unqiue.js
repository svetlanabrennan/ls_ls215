function isAllUnique(string) {
  let arr = string.split(" ");
  console.log(string);
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
// isAllUnique('123,456,789');                                 // false
// isAllUnique('The big apple');                               // false
// isAllUnique('The big apPlE');                               // false
// isAllUnique('!@#$%^&*()');                                  // true
// isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true