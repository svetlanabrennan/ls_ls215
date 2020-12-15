/*
input: string
output: string
rules:

  In a sentence, convert numbered words to corresponding digits and return sentence

edge cases:

  will the numbered words always be on their own or can be be combined with another word?

example:
'Please call me at five five five one two three four. Thanks.'
 "Please call me at 5 5 5 1 2 3 4. Thanks."

test cases:

"I can't believe it almost twenty twenty one."
"I can't believe it almost 20 21."

"I will be awake at seven thirty AM."
"I will be awake at 7 30 AM."

"I go to bed at tenPMtwelve."
"I go to bed at 10PM12."

questions:
  what to do with empty input
  do the numbers go up to 9 only

algo:
  // using array and amp
  create a digits array to store the word of each number, starting at "zero" at index 0
  split string into words and assign to result array
  map through result array

    if word (make it lowercase) is found in the digits array (use includes method) return the index of that word in the digits array
    otherwise return word as is
  combine array and return

  // using object and map
*/

// using indexOf
// function wordToDigit(string) {
//   let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//   let result = string.split(/\b/);
//   return result.map(word => {

//     if (digits.includes(word.toLowerCase())) {
//       return digits.indexOf(word);
//     } else {
//       return word;
//     }
//   }).join("");
// }

// using replace
// function wordToDigit(string) {
//   let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//   digits.map((digit, idx) => {
//     let regex = new RegExp(digit, "g");
//     string = string.replace(regex, idx);
//   });
//   return string;
// }

// using object
// function wordToDigit(string) {
//   const NUM_WORDS = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   }

//   Object.keys(NUM_WORDS).forEach((digit, idx) => {
//     let regex = new RegExp(digit, "g");
//     string = string.replace(regex, idx);
//   });
//   return string;
// }

// using objects 2
function wordToDigit(string) {
  const NUM_WORDS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  let result = string.split(/\b/);
  return result.map(word => {

    if (NUM_WORDS[word]) {
      return NUM_WORDS[word];
    } else {
      return word;
    }
  }).join("");
}



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
//"Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit("I can't believe it almost twenty twenty one."));
//"I can't believe it almost twenty twenty 1."

console.log(wordToDigit("I will be awake at seven thirty AM."));
//"I will be awake at 7 30 AM."

console.log(wordToDigit("I go to bed at tenPMtwelve."));
//"I go to bed at 10PM12."