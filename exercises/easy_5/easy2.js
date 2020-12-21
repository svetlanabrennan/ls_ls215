/*
input: string
output: new string with doubled consonants

rules:
  double every chr that is a consonant (not vowels, digits, punctuation or whitespace)

test cases:
  doubleConsonants('String');          // "SSttrrinngg"
  doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th');        // "JJullyy 4tthh"
  doubleConsonants('');                // ""
  doubleConsonants('123'); // 123
  doubleConsonants(' '); // " ";

algo:
  split string into array at chrs and assigned to array variable
  map through each element in array
    if lowercased chr is a alpha chrs AND lowercased chr is not a vowel then return chr twice
      use test and regex
        /[a-z]/ => for alpha chrs
        /[^aeiou]/ => for not vowels

    else return chr
  return joined mapped array
*/

function doubleConsonants(string) {
  let array = string.split("");
  return array.map(chr => {
    if (/[a-z]/.test(chr.toLowerCase()) && /[^aeiou]/.test(chr.toLowerCase())) {
      return chr + chr;
    } else {
      return chr;
    }
  }).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
console.log(doubleConsonants('123')); // 123
console.log(doubleConsonants(' ')); // " ";
