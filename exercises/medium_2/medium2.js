/*
input: integers
output: string - type of triangle

rules:
  valid triangle: sum of lenths of TWO shortest sides > than length of longest side AND every side > 0

  take length of 3 sides and return string of type of triangle

questions:

  will there always be integer input?

test cases:
  triangle(3, 3, 3);        // "equilateral"
  triangle(3, 3, 1.5);      // "isosceles"
  triangle(3, 4, 5);        // "scalene"
  triangle(0, 3, 3);        // "invalid"
  triangle(3, 1, 1);        // "invalid"
  triangle(0, 0, 0); // invalid

algo:

  check if its a valid triangle (subprocess)
    create an array of all 3 sides
    use "every" method to check if every num is > 0
      if yes, 
        sort by shortest to longest
        get sum of the first two elements
        if sum > than the 3rd element return true
        else, return false
      if no, 
        return false

  if valid, check type of triangle (subprocess)
    if side 1 === side 2 and side1 === 3 return equilateral
    if side 1 is not === side 2 and side 1 is not === side 3 and if side 2 is not === side 3 return scalene
    else return iscosceles
  
  else return invalid

*/

function triangle(side1, side2, side3) {
  if (validTriangle(side1, side2, side3)) {
    if (side1 === side2 && side1 === side3) {
      return "Equilateral";
    } else if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) {
      return "Scalene";
    } else {
      return "Isosceles";
    }
  } else {
    return "invalid";
  }
}

function validTriangle(one, two, three) {
  let sides = [one, two, three];
  if (sides.every(side => side > 0)) {
    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] > sides[2]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(triangle(3, 3, 3));     // equilateral;
console.log(triangle(3, 3, 1.5));      // "isosceles")
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"