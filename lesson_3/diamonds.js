// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

/*
input: odd number
output: string of *

rules:
  display a four pointed diamond in a nxn grid

examples:
input is 9  

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

stars start with 1 on top
next row = last row of stars + 2
next row = last row of stars  + 2
.etc

algo

  create the stars in two function calls

  first function call: build top half of diamond
    create a while loop
      create a counter variable to start at 1
      until counter reaches target number (input number), continue with loop
      calculate the spaces you'll need for each side (subprocess)
      log string to console => spaces + counter + spaces
      add 1 to counter

  second function call: build bottom half of diamond
    create a while loop
      create counter variable to start at input number - 2
      until counter reaches 1 or less
      calculate the spaces you'll need for each side (subprocess)
      log string to console => spaces + counter + spaces
      add 1 to counter

  calculate spaces subprocess
    spaces on each side will be determine this way:
      input number (max stars) - current loop counter value (represents stars) / 2
        this will represent spaces on each side of the stars

*/

function diamond(targetStars) {
  topHalf(targetStars);
  bottomHalf(targetStars);
}

function topHalf(target) {
  let stars = 1;
  while (stars <= target) {
    let spaces = (target - stars) / 2;
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}${" ".repeat(spaces)}`);
    stars += 2;
  }
}

function bottomHalf(target) {
  let stars = target - 2;
  while (stars >= 0) {
    let spaces = (target - stars) / 2;
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}${" ".repeat(spaces)}`);
    stars -= 2;
  }
}


diamond(3);
// // logs
//  *
// ***
//  *

diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *