/*
input: string
output: new string

test cases
Pineapples don't go on pizzas! // Bmnxmtpeqw dhz'x gh ar pbldal!

notes:
  not case sensitive

edge cases:
  don't cipher non alpha letters


algo:
  option 1: use arrays and map

  create an alpha array with a-z values
  create a counter variable = 0;
  split input string into array at chr named result;
  map through result array
    check if chr is an alpha chr

      if yes, do this:

        find the index of letter in keyword => MAKE LETTER LOWERCASE
          keyword letter = keyword[count] meat[0]
          find the keyword letter index in alpha array
          if count === keyword length - 1, then count = 0
          else add 1 to count
        find the index of letter for curr chr => MAKE LETTER LOWERCASE
          return the index of the chr in alpha array
        add up the two indexes and return the chr at this summed up index
        if sum > 25 ex. 27 -26 = 1

      else
        return chr

  join result array and return


index of e = 4
index of i = 8
index 12 is 

let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

i
*/

let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

function cipher(string, keyword) {

  let count = 0;

  let result = string.split("").map(chr => {

    if (/\w/.test(chr.toLowerCase())) {
      let keywordChr = keyword[count];
      let keyChrIdx = alpha.indexOf(keywordChr.toLowerCase());
      if (count === keyword.length - 1) {
        count = 0;
      } else {
        count += 1;
      }

      let chrIdx = alpha.indexOf(chr.toLowerCase());

      let val = keyChrIdx + chrIdx;
      if (val > 25) {
        val = val - 26;
      }

      if (chr === chr.toUpperCase()) {
        return alpha[val].toUpperCase();
      } else {
        return alpha[val];
      }

    } else {
      return chr;
    }
  });
  return result.join("");
}

console.log(cipher("Pineapples don't go on pizzas!", "meat"));
console.log(cipher("Pineapples don't go on pizzas!", "A"));
console.log(cipher("Pineapples don't go on pizzas!", "Aa"));
console.log(cipher("Pineapples don't go on pizzas!", "cab"));
console.log(cipher("Dog", "Rabbit"));