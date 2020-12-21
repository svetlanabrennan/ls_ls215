/*
input: integer
output: string (stars)
rules:

  use the input number to create an 8 point star

example:
n = 7

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

split pattern into 3 function calls: 1st section for top half, 2nd section for middle section, 3rd section for bottom
length of output string will match the input number
there will always be 3 stars, the spaces will vary
how to calculate the spaces:
  since there will always be 3 stars, take n - 3 = spaces / 2 => these are the spaces to start with on row 1
  then subtract 1 space on each row going down
  once I have zero spaces, then you should output all n stars

1st: 3 stars 4 spaces 
2nd: 3 stars 4 spaces
3rd: 3 stars 4 spaces
4th: 7 stars 0 spaces

1st: left 0 middle 2 middle 2 right 0
2nd: left 1 middle 1 middle 1 right 1
3rd: left 2 middle 0 middle 0 right 2

2nd half of pattern
reverse the 1st pattern minus last row

test cases:

n = 11

*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *



algo:

  create a spaces variable and assign this value: spaces (n) - 3 / 2; NOTE: spaces between stars
  let variable = 0;
  create a for loop starting with index set to spaces
    index = spaces and SUBTRACT 1 from index // 2 1 0
    console log the following:
    for each for loop round, add 1 + outerspace
      * + spaces (use " " and repeat with value of space for repeat) + star
    
  console the n stars 

  create a for loop starting with index set to 0
    index = 0 and ADD 1 to index,  // 0 1 2 NOTE: break once index reaches spaces count
    console log the following:
      * + spaces (use " " and repeat with value of space for repeat) + star

*/

// using for loops
function stars(stars) {
  let spaces = (stars - 3) / 2;

  for (let idx = 0; idx < Math.floor(stars / 2); idx += 1) {
    console.log(" ".repeat(idx) + "*" + " ".repeat(spaces) + "*" + " ".repeat(spaces) + "*");
    spaces -= 1;
  }

  console.log("*".repeat(stars));
  spaces = (stars - 3) / 2;

  for (let idx = 0; idx < Math.floor(stars / 2); idx += 1) {
    console.log(" ".repeat(spaces) + "*" + " ".repeat(idx) + "*" + " ".repeat(idx) + "*");
    spaces -= 1;
  }
}


// using map and forEach
// function stars(stars) {
//   let array = Array(stars).fill("");
//   let spaces = (stars - 3) / 2;
//   let middle = 0;

//   let result = array.map((element, index) => {
//     if (index < Math.ceil(stars / 2) - 1) {
//       return " ".repeat(index) + "*" + " ".repeat(spaces - index) + "*" + " ".repeat(spaces - index) + "*";
//     } else if (index === Math.ceil(stars / 2 - 1)) {
//       return "*".repeat(stars);
//     } else {
//       let value = " ".repeat(spaces) + "*" + " ".repeat(middle) + "*" + " ".repeat(middle) + "*";
//       spaces -= 1;
//       middle += 1;
//       return value;
//     }
//   });

//   result.forEach(row => console.log(row));
// }

console.log(stars(11));
