// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

function removeVowels(arr) {
  return arr.map(str => str.split("").map(chr => {
    if (("aeiou").includes(chr.toLowerCase())) {
      return "";
    } else {
      return chr;
    }
  }).join(""));
}

function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/gi, ""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]