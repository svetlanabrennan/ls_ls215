function isAllUnique(string) {
  let combinedString = string.toLowerCase().split(" ").join("");

  for (let i = 0; i < combinedString.length; i += 1) {
    if (combinedString.indexOf(combinedString[i]) !== combinedString.lastIndexOf(combinedString[i])) {
      return false;
    }
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true